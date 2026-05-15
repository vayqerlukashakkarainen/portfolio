<script lang="ts">
	import { base } from '$app/paths';
	import { type Project, anyMediaInProject } from '$lib/project';
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import MasonryGrid from '../../../components/MasonryGrid.svelte';
	import Lightbox from '../../../components/Lightbox.svelte';

	/** @type {import('./$types').PageData} */
	export let data: Project;

	let mounted = false;
	onMount(() => (mounted = true));

	let lightboxImages: string[] = [];
	let lightboxIndex = 0;
	let lightboxOpen = false;

	function handleImageClick(e: MouseEvent) {
		const target = e.target as HTMLElement;
		if (target.tagName !== 'IMG') return;

		const allImgs = Array.from(document.querySelectorAll<HTMLImageElement>('.page img'));
		lightboxImages = allImgs.map((img) => img.src);
		lightboxIndex = allImgs.indexOf(target as HTMLImageElement);
		lightboxOpen = true;
	}
</script>

<svelte:head>
	<title>{data.title} — Lukas Hakkarainen</title>
</svelte:head>

<div class="page" on:click={handleImageClick}>
	{#if mounted}
		{#if lightboxOpen}
			<Lightbox
				images={lightboxImages}
				index={lightboxIndex}
				onClose={() => (lightboxOpen = false)}
			/>
		{/if}

		<div class="sticky-top" in:fade={{ duration: 200, delay: 0 }}>
			<a class="back" href={`${base}/`}>
				<Icon icon="mdi:arrow-left" /> Back
			</a>

			<header>
				<h1>{data.title}</h1>
				<p class="subtitle">{data.date}</p>
				{#if data.wip}
					<span class="in-dev">IN PROGRESS</span>
				{/if}
			</header>
		</div>

		{#if data.pageContent}
			{#if data.pageContent.appRes || data.pageContent.devRes || data.pageContent.apiRes}
				<div class="resources" in:fade={{ duration: 200, delay: 160 }}>
					{#if data.pageContent.appRes}
						<div class="resource-group">
							<span class="resource-label">Links</span>
							<div class="resource-icons">
								{#each data.pageContent.appRes as res}
									<a target="_blank" href={res.url} title={res.text}>
										<Icon icon={res.icon} />
									</a>
								{/each}
							</div>
						</div>
					{/if}
					{#if data.pageContent.devRes}
						<div class="resource-group">
							<span class="resource-label">Built with</span>
							<div class="resource-icons">
								{#each data.pageContent.devRes as res}
									<a target="_blank" href={res.url} title={res.text}>
										<Icon icon={res.icon} />
									</a>
								{/each}
							</div>
						</div>
					{/if}
					{#if data.pageContent.apiRes}
						<div class="resource-group">
							<span class="resource-label">APIs</span>
							<div class="resource-icons">
								{#each data.pageContent.apiRes as res}
									<a target="_blank" href={res.url} title={res.text}>
										<Icon icon={res.icon} />
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/if}

			<div class="content" in:fade={{ duration: 200, delay: 200 }}>
				<svelte:component this={data.pageContent.description} />
			</div>
		{/if}

		{#if anyMediaInProject(data.slug).anyMedia}
			<div class="gallery" in:fade={{ duration: 200, delay: 320 }}>
				<MasonryGrid slug={data.slug} />
			</div>
		{/if}

		<footer in:fade={{ duration: 200, delay: 280 }}>
			{#if data.website}
				<a href={data.website} target="_blank">
					<Icon icon="mdi:open-in-new" /> Visit website
				</a>
			{/if}
			{#if data.appUrl}
				<a href={data.appUrl} target="_blank">
					<Icon icon="mdi:open-in-new" /> View app
				</a>
			{/if}
		</footer>
	{/if}
</div>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
		font-family: 'Inter', sans-serif;
	}

	.sticky-top {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--color-bg);
		padding-top: 1.5rem;
		padding-bottom: 0.5rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid var(--color-border);
	}

	.back {
		display: inline-flex;
		align-items: center;
		gap: 0.4ch;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
		text-decoration: none;
		margin-bottom: 0.5rem;
	}
	.back:hover {
		color: var(--color-text-primary);
	}

	header {
		margin-bottom: 2rem;
	}

	h1 {
		margin: 0 0 0.4rem;
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.subtitle {
		margin: 0 0 1rem;
		font-size: 0.9rem;
		color: var(--color-text-secondary);
	}

	.resources {
		display: flex;
		gap: 2rem;
		margin-bottom: 0.5rem;
	}

	.resource-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.resource-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		opacity: 0.6;
		color: var(--color-text-primary);
	}

	.resource-icons {
		display: flex;
		gap: 0.75rem;
		font-size: 1.4rem;
	}

	.resource-icons a {
		color: var(--color-text-primary);
		text-decoration: none;
	}
	.resource-icons a:hover {
		color: var(--color-accent);
	}

	.content :global(img) {
		cursor: zoom-in;
	}

	.content :global(h4) {
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		opacity: 0.6;
		color: var(--color-text-primary);
		margin: 1.5rem 0 0.5rem;
	}

	.content {
		margin-top: 1.5rem;
		line-height: 1.75;
		color: var(--color-text-secondary);
	}

	.gallery {
		margin-top: 2.5rem;
	}

	footer {
		margin-top: 3rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
		display: flex;
		gap: 1.5rem;
	}

	footer a {
		display: inline-flex;
		align-items: center;
		gap: 0.4ch;
		font-size: 0.9rem;
		color: var(--color-accent);
		text-decoration: none;
	}
	footer a:hover {
		text-decoration: underline;
	}
</style>
