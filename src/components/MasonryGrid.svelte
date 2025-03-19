<script lang="ts">
	import { extractProjectImages, isImage, isVideo, removeStaticDir } from '$lib/project';

	export let slug: string;

	const imgs = extractProjectImages(slug);
</script>

<div class="grid">
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
	.grid {
		width: 416px;
		position: relative;
		left: -208px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 200px));
		row-gap: 8px;
		column-gap: 8px;
	}

	video,
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 28px;
		border: 3px solid rgb(29, 29, 29);
	}
</style>
