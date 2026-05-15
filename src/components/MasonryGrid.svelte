<script lang="ts">
	import { base } from '$app/paths';
	import { extractProjectImages, isImage, isVideo, removeStaticDir } from '$lib/project';

	export let slug: string;

	const rawImgs = extractProjectImages(slug, 12);
	$: resolved = [...new Set(rawImgs.filter(Boolean))];
</script>

<div class="grid">
	{#each resolved as src}
		{#if isImage(src)}
			<div class="item clickable">
				<img src={`${base}/${removeStaticDir(src)}`} alt="project screenshot" />
			</div>
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
		border: 1px solid var(--color-border);
		background: var(--color-border);
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
