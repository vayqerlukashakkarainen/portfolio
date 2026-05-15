<script lang="ts">
	import { isVideo } from '$lib/project';

	export let slug: string;

	// Use keys (file paths) not values (resolved URLs) — strip /static prefix for browser
	const allFiles = import.meta.glob('/static/images/**/*', { query: '?url', import: 'default' });

	$: files = Object.keys(allFiles)
		.filter((path) => path.includes(`/images/${slug}/`))
		.map((path) => path.replace(/^\/static/, ''))
		.sort();
</script>

{#if files.length > 0}
	<div class="gallery">
		{#each files as src}
			{#if isVideo(src)}
				<!-- svelte-ignore a11y-media-has-caption -->
				<video controls playsinline>
					<source {src} type="video/mp4" />
				</video>
			{:else}
				<img {src} alt="" loading="lazy" />
			{/if}
		{/each}
	</div>
{/if}

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}

	.gallery img,
	.gallery video {
		width: 100%;
		max-height: 320px;
		object-fit: cover;
		border-radius: 4px;
		display: block;
	}
</style>
