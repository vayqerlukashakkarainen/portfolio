<script>
	import { projects } from '$lib/project';
	import { allImagesSame, getRandomImage } from '$lib/images';
	import Icon from '@iconify/svelte';
	import Project from '../components/Project.svelte';
	import Image from '../components/Image.svelte';
	import Me from '../components/Me.svelte';
	import Dialog from '../components/Dialog.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => (mounted = true));

	$: allSame = false;
	$: appsProjects = projects.filter((p) => p.category === 'apps').sort((a, b) => b.date - a.date);
	$: wackyProjects = projects.filter((p) => p.category === 'wacky').sort((a, b) => b.date - a.date);
	$: boringProjects = projects
		.filter((p) => p.category === 'boringWebsites')
		.sort((a, b) => b.date - a.date);
	$: wordpressProjects = projects
		.filter((p) => p.category === 'wordpressExtensions')
		.sort((a, b) => b.date - a.date);
</script>

<svelte:head>
	<meta property="og:title" content="Hey! - Lukas Hakkarainen" />
	<meta property="og:image" content={`https://luhakk.com/urlimg.png`} />
</svelte:head>

<div id="top" class="container">
	{#if mounted}
		<div class="me" in:fade={{ duration: 200, delay: 0 }}>
			<Me />
			<h1 class="primary">
				<Dialog
					text={'<wait=30>Hello!<wait=40> This is<wait=10><speed=20>... <wait=12><speed=7>pretty much <wait=30>my portfolio'}
				/>
			</h1>
		</div>
		<p in:fade={{ duration: 200, delay: 80 }}>
			Self-taught software developer based in Sweden's countryside, close to Borås, constantly
			tinkering on my house and what I find fun software. Building Lars and currently working as a
			team leader @Rudholm Technology AB.
		</p>

		<div class="lars-banner" in:fade={{ duration: 200, delay: 160 }}>
			<h2 class="lars-heading">Lars</h2>
			<p class="lars-sub">An AI agent system I'm building</p>
			<a class="lars-link" href="/lars">Read more →</a>
		</div>

		<div class="breakout pt-2">
			<div id="apps" in:fade={{ duration: 200, delay: 240 }}>
				<header class="category-header">
					<h2>Apps</h2>
					<p class="category-desc">Things you can actually use! Web apps, tools, and experiments</p>
				</header>
				<div class="project-grid">
					{#each appsProjects as project, i}
						<div in:fade={{ duration: 200, delay: i * 60 }}>
							<Project {project} />
						</div>
					{/each}
				</div>
			</div>

			<div id="wacky" in:fade={{ duration: 200, delay: 320 }}>
				<header class="category-header">
					<h2>Wacky</h2>
					<p class="category-desc">
						Odd ideas, creative hacks, and projects built mostly for the fun of it
					</p>
				</header>
				<div class="project-grid">
					{#each wackyProjects as project, i}
						<div in:fade={{ duration: 200, delay: i * 60 }}>
							<Project {project} />
						</div>
					{/each}
				</div>
			</div>

			<div id="boring" in:fade={{ duration: 200, delay: 400 }}>
				<header class="category-header">
					<h2>Boring websites</h2>
					<p class="category-desc">Clean, functional sites</p>
				</header>
				<div class="project-grid">
					{#each boringProjects as project, i}
						<div in:fade={{ duration: 200, delay: i * 60 }}>
							<Project {project} />
						</div>
					{/each}
				</div>
			</div>

			<div id="wordpress" in:fade={{ duration: 200, delay: 480 }}>
				<header class="category-header">
					<h2>WordPress extensions</h2>
					<p class="category-desc">Custom blocks and plugins built on top of WordPress</p>
				</header>
				<div class="project-grid">
					{#each wordpressProjects as project, i}
						<div in:fade={{ duration: 200, delay: i * 60 }}>
							<Project {project} />
						</div>
					{/each}
				</div>
			</div>

			<div id="dog" in:fade={{ duration: 200, delay: 560 }}>
				<header class="category-header">
					<h2>Cute pictures of my dog</h2>
					<p class="category-desc">Exactly what it says</p>
				</header>
				<hr />
				<div class="project-grid">
					{#each { length: 3 } as _, i}
						<div in:fade={{ duration: 200, delay: i * 60 }}>
							<Image
								onChange={() => {
									allSame = allImagesSame();
								}}
								{allSame}
								index={i}
								image={getRandomImage(i)}
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="yay" class:show={allSame}>
			<p>Nice work! Here is your reward</p>
			<div>
				<Icon icon="mdi:trophy" />
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
		height: 160px;
	}
	.yay {
		opacity: 0;
		transform: translateY(0px);
		transition: all 300ms ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
	}
	.yay.show {
		opacity: 1;
		transform: translateY(12px);
	}
	.yay p {
		margin: 0;
	}
	.yay.show > div {
		animation: rubber-band 1.3s linear;
		animation-delay: 300ms;
	}
	a {
		color: var(--color-teal-500);
	}

	.category-header {
		margin-bottom: 1rem;
	}

	.category-header h2 {
		margin: 0 0 0.4rem;
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.category-desc {
		margin: 0;
		font-size: 0.9rem;
		color: var(--color-text-secondary);
	}

	hr {
		border: none;
		border-top: 1px solid var(--color-border);
		margin: 0 0 1.5rem;
	}

	.breakout > div + div .category-header {
		margin-top: 3rem;
	}

	.lars-banner {
		margin-top: 2rem;
		padding: 2rem;
		border-radius: 4px;
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
	}

	.lars-link:hover {
		text-decoration: underline;
	}
	@keyframes rubber-band {
		0% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}

		30% {
			-webkit-transform: scale3d(1.25, 0.75, 1);
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			-webkit-transform: scale3d(0.75, 1.25, 1);
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			-webkit-transform: scale3d(1.15, 0.85, 1);
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			-webkit-transform: scale3d(0.95, 1.05, 1);
			transform: scale3d(0.95, 1.05, 1);
		}

		75% {
			-webkit-transform: scale3d(1.05, 0.95, 1);
			transform: scale3d(1.05, 0.95, 1);
		}

		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
</style>
