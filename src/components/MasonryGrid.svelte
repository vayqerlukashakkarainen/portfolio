<script lang="ts">
	import { extractProjectImages, isImage, isVideo, removeStaticDir } from '$lib/project';

	export let slug: string;

	const imgs = extractProjectImages(slug, 12);
</script>

<div class="test">
	{#each imgs as image}
		{#await image then src}
			{#if isImage(src)}
				<img src={`/${removeStaticDir(src)}`} alt="project images" />
			{:else if isVideo(src)}
				<video playsInline={true} autoPlay={true} muted={true} loop={true}>
					<source src={`/${removeStaticDir(src)}`} type="video/mp4" />
				</video>
			{/if}
		{/await}
	{/each}
</div>

<style>
	.test {
		display: flex;
		flex-wrap: wrap;
		width: 600px;
		position: relative;
		gap: 6px;
		transform: translateX(-50%);
	}
	.test > * {
		max-height: 400px;
		width: auto;
	}
	video,
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
