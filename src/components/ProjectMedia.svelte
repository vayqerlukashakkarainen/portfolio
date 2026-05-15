<script lang="ts">
	import { isVideo } from '$lib/project';

	export let src: string;
	export let caption: string | undefined = undefined;
</script>

{#if caption}
	<figure>
		{#if isVideo(src)}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video controls playsinline {src}>
				<source {src} type="video/mp4" />
			</video>
		{:else}
			<img {src} alt={caption} loading="lazy" />
		{/if}
		<figcaption>{caption}</figcaption>
	</figure>
{:else if isVideo(src)}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video controls playsinline>
		<source {src} type="video/mp4" />
	</video>
{:else}
	<img {src} alt="" loading="lazy" />
{/if}

<style>
	figure {
		margin: 0;
	}

	figcaption {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		color: var(--color-muted, #888);
		text-align: center;
	}

	img,
	video {
		width: 100%;
		max-height: 480px;
		object-fit: contain;
		border-radius: 4px;
		display: block;
	}
</style>
