<script lang="ts">
	import { projects } from '$lib/project';
	import { getRandomImage } from '$lib/images';
	import Icon from '@iconify/svelte';
	import Project from '../components/Project.svelte';
	import Me from '../components/Me.svelte';
	import Dialog from '../components/Dialog.svelte';
	import { masonry } from '$lib/masonry';
	import { fade } from 'svelte/transition';
	import { onMount, tick } from 'svelte';
	import { base } from '$app/paths';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	const SCROLL_KEY = 'index-scroll';

	beforeNavigate(() => {
		sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
	});

	afterNavigate(({ from }) => {
		if (from?.url.pathname.startsWith('/projects')) {
			pendingScrollRestore = parseInt(sessionStorage.getItem(SCROLL_KEY) ?? '0');
		}
	});

	let pendingScrollRestore = 0;

	function onGridReady() {
		if (pendingScrollRestore > 0) {
			window.scrollTo({ top: pendingScrollRestore, behavior: 'instant' });
			pendingScrollRestore = 0;
		}
	}

	function scaleOut(node: HTMLElement) {
		return {
			duration: 150,
			css: (t: number) => `opacity: ${t}; transform: scale(${0.85 + 0.15 * t})`
		};
	}

	const PINS_KEY = 'pinned-projects';

	let pinnedSlugs = new Set<string>();

	function loadPins(): Set<string> {
		try {
			return new Set(JSON.parse(localStorage.getItem(PINS_KEY) ?? '[]'));
		} catch {
			return new Set();
		}
	}

	function savePins() {
		localStorage.setItem(PINS_KEY, JSON.stringify([...pinnedSlugs]));
	}

	function togglePin(slug: string) {
		if (pinnedSlugs.has(slug)) {
			pinnedSlugs.delete(slug);
		} else {
			pinnedSlugs.add(slug);
		}
		pinnedSlugs = new Set(pinnedSlugs);
		savePins();
		if (pinnedSlugs.size === 0 && activeFilter === 'pinned') {
			setFilter('all');
		}
	}

	let mounted = false;
	let innerWidth = 0;
	let gridEl: HTMLElement;
	onMount(() => {
		pinnedSlugs = loadPins();
		activeFilter = pinnedSlugs.size > 0 ? 'pinned' : 'all';
		mounted = true;
	});

	$: masonryColumns = innerWidth <= 600 ? 1 : innerWidth <= 860 ? 2 : 3;

	$: appsProjects = projects.filter((p) => p.category === 'apps').sort((a, b) => b.date - a.date);
	$: wackyProjects = projects.filter((p) => p.category === 'wacky').sort((a, b) => b.date - a.date);
	$: boringProjects = projects
		.filter((p) => p.category === 'boringWebsites')
		.sort((a, b) => b.date - a.date);
	$: wordpressProjects = projects
		.filter((p) => p.category === 'wordpressExtensions')
		.sort((a, b) => b.date - a.date);

	type FilterKey =
		| 'all'
		| 'apps'
		| 'wacky'
		| 'boringWebsites'
		| 'wordpressExtensions'
		| 'dog'
		| 'pinned';
	let activeFilter: FilterKey = 'all';

	$: filters = [
		...(pinnedSlugs.size > 0
			? [{ key: 'pinned' as FilterKey, label: 'Pinned', icon: 'mdi:pin' }]
			: []),
		{ key: 'all' as FilterKey, label: 'All' },
		{ key: 'apps' as FilterKey, label: 'Apps' },
		{ key: 'wacky' as FilterKey, label: 'Wacky' },
		{ key: 'boringWebsites' as FilterKey, label: 'Boring sites' },
		{ key: 'wordpressExtensions' as FilterKey, label: 'WordPress' },
		{ key: 'dog' as FilterKey, label: 'Dog' }
	];

	$: allProjects = [
		...appsProjects,
		...wackyProjects,
		...boringProjects,
		...wordpressProjects
	].sort((a, b) => b.date - a.date);

	$: filteredProjects =
		activeFilter === 'all'
			? allProjects
			: activeFilter === 'dog'
				? []
				: activeFilter === 'pinned'
					? allProjects.filter((p) => pinnedSlugs.has(p.slug))
					: projects.filter((p) => p.category === activeFilter).sort((a, b) => b.date - a.date);

	$: showDog = activeFilter === 'all' || activeFilter === 'dog';

	async function setFilter(key: FilterKey) {
		if (gridEl) gridEl.dispatchEvent(new CustomEvent('masonry:snapshot'));
		activeFilter = key;
		await tick();
		if (gridEl) gridEl.dispatchEvent(new CustomEvent('masonry:shuffle'));
	}
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<meta property="og:title" content="Hey! - Lukas Hakkarainen" />
	<meta property="og:image" content={`https://luhakk.com/urlimg.png`} />
</svelte:head>

<div id="top" class="container">
	{#if mounted}
		<div class="me" in:fade={{ duration: 200, delay: 0 }}>
			<h1 class="primary">
				<Dialog text={'Father<wait=30>, carpenter hobbyist<wait=30> and engineer'} />
			</h1>
		</div>
		<p in:fade={{ duration: 200, delay: 80 }}>
			My name is Lukas and I am a self-taught software developer based in Sweden's countryside,
			constantly tinkering on my house and what I find fun software. Building LARS and currently
			working as a team leader @Rudholm Technology AB.
		</p>

		<div class="lars-banner breakout" in:fade={{ duration: 200, delay: 160 }}>
			<h2 class="lars-heading">LARS artificial intelligence</h2>
			<p class="lars-sub">
				I believe agents are the future of desktop work and administration workload. I'm building
				LARS to help myself and others for the best way to extend these capabilities.
			</p>
			<a class="lars-link" href="{base}/lars">Read more →</a>
		</div>

		<div class="breakout pt-2">
			<p>Other projects built by me</p>
			<div class="filter-bar sticky-fade" in:fade={{ duration: 200, delay: 200 }}>
				{#each filters as f}
					<button
						class="filter-btn"
						class:active={activeFilter === f.key}
						on:click={() => setFilter(f.key)}
					>
						{#if f.icon}<Icon icon={f.icon} />{/if}
						{f.label}
					</button>
				{/each}
			</div>

			<div
				class="project-grid"
				bind:this={gridEl}
				use:masonry={{ columns: masonryColumns, gap: 12, onReady: onGridReady }}
			>
				{#each filteredProjects as project, i (project.slug)}
					<div out:scaleOut>
						<Project
							{project}
							pinned={pinnedSlugs.has(project.slug)}
							onPin={() => togglePin(project.slug)}
						/>
					</div>
				{/each}

				{#if showDog}
					{#each { length: 3 } as _, i}
						<div out:scaleOut>
							<img class="dog-img" alt="My dog" src={`${base}/images/${getRandomImage(i).url}`} />
						</div>
					{/each}
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.me {
		padding-top: calc(1.5vw + 100px);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0;
		text-align: left;
	}
	.me h1 {
		font-size: calc(1vw + 42px);
		height: calc(260px - 5vw);
		min-height: 160px;
		max-height: 200px;
	}
	.dog-img {
		width: 100%;
		display: block;
		border: 1px solid var(--color-border);
	}
	a {
		color: var(--color-teal-500);
	}

	.filter-bar {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
		margin-bottom: 2rem;
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--color-bg);
		padding: 0.75rem 0;
		margin-top: -0.75rem;
	}

	.filter-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.35ch;
		background: none;
		border: 1px solid var(--color-border);
		padding: 0.3rem 0.85rem;
		font-size: 0.8rem;
		font-family: inherit;
		color: var(--color-text-secondary);
		cursor: pointer;
		border-radius: 2px;
		transition:
			border-color 150ms ease,
			color 150ms ease,
			background 150ms ease;
	}

	.filter-btn:hover {
		border-color: var(--color-text-primary);
		color: var(--color-text-primary);
	}

	.filter-btn.active {
		background: var(--color-text-primary);
		border-color: var(--color-text-primary);
		color: var(--color-bg);
	}

	.lars-banner {
		margin-top: 2rem;
		padding: 2rem;
		border-left: 2px solid black;
		background: rgb(240, 240, 240);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.lars-heading {
		margin: 0;
		font-size: 2.25rem;
		font-weight: 700;
		color: var(--color-text-primary);
		letter-spacing: -0.02em;
	}

	.lars-sub {
		margin: 0;
		color: var(--color-text-secondary);
		font-size: 1rem;
	}

	.lars-link {
		display: inline-block;
		margin-top: 0.5rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--color-teal-500);
		text-decoration: none;
		font-family: inherit;
	}

	.lars-link:hover {
		text-decoration: underline;
	}
</style>
