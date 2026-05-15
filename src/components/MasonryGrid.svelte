<script lang="ts">
	import { base } from '$app/paths';
	import { extractProjectImages, isImage, isVideo, removeStaticDir } from '$lib/project';
	import Lightbox from './Lightbox.svelte';

	export let slug: string;

	const rawImgs = extractProjectImages(slug, 12);

	// Deduplicate and resolve srcs (they are plain strings, not real Promises)
	$: resolved = [...new Set(rawImgs.filter(Boolean))];
	$: imageOnly = resolved.filter(isImage);

	let lightboxOpen = false;
	let lightboxIndex = 0;

	function openLightbox(src: string) {
		lightboxIndex = imageOnly.indexOf(src);
		lightboxOpen = true;
	}
</script>

{#if lightboxOpen}
	<Lightbox
		images={imageOnly.map((s) => `${base}/${removeStaticDir(s)}`)}
		index={lightboxIndex}
		onClose={() => (lightboxOpen = false)}
	/>
{/if}

<div class="grid">
	{#each resolved as src}
		{#if isImage(src)}
			<button
				class="item clickable"
				on:click={() => openLightbox(src)}
				aria-label="Open image full size"
			>
				<img src={`${base}/${removeStaticDir(src)}`} alt="project screenshot" />
			</button>
		{:else if isVideo(src)}
			<div class="item">
				<video playsinline autoplay muted loop>
					<source src={`${base}/${removeStaticDir(src)}`} type="video/mp4" />
				</video>
			</div>
		{/if}
	{/each}
</div>

<style>
	.grid {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.item {
		flex: 1 1 200px;
		max-height: 240px;
		overflow: hidden;
		border-radius: 4px;
		border: 1px solid var(--color-border);
		background: var(--color-border);
		padding: 0;
	}

	.item.clickable {
		cursor: zoom-in;
		transition:
			border-color 150ms ease,
			box-shadow 150ms ease;
	}
	.item.clickable:hover {
		border-color: var(--color-text-primary);
		box-shadow: 2px 2px 0 var(--color-text-primary);
	}
	.item.clickable:focus-visible {
		outline: 2px solid var(--color-accent, var(--color-text-primary));
		outline-offset: 2px;
	}

	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	@media (prefers-reduced-motion: reduce) {
		.item.clickable {
			transition: none;
		}
	}
</style>
