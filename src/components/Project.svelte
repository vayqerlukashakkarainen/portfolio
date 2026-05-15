<script lang="ts">
	import { isVideo, type Project } from '$lib/project';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	export let project: Project;
</script>

<a
	class={`project ${project.category}`}
	href={project.isExternalUrl ? project.url : `${base}/` + project.url + project.slug}
	target={project.isExternalUrl ? '_blank' : '_self'}
>
	<div class="media">
		{#if isVideo(project.bgImg ?? '')}
			<video playsInline autoplay muted loop>
				<source src={`${base}/${project.bgImg}`} type="video/mp4" />
			</video>
		{:else if project.bgImg}
			<img src={`${base}/${project.bgImg}`} alt={project.title} />
		{:else}
			<div class="media-placeholder"></div>
		{/if}
	</div>
	<div class="content">
		<div class="header">
			<h3>{project.title}</h3>
			{#if project.isExternalUrl}
				<Icon icon="mdi:open-in-new" />
			{/if}
		</div>
		<p>{project.description}</p>
		{#if project.wip}
			<span class="in-dev">IN PROGRESS</span>
		{/if}
	</div>
</a>

<style>
	a {
		text-decoration: none;
		display: flex;
		flex-direction: row;
		position: relative;
		overflow: hidden;
		transition:
			box-shadow 200ms ease,
			border-color 200ms ease;
	}
	a:hover {
		border-color: var(--color-text-primary);
		box-shadow: 4px 4px 0 var(--color-text-primary);
	}
	.media {
		width: 160px;
		min-width: 160px;
		height: 140px;
		overflow: hidden;
		flex-shrink: 0;
	}
	.media img,
	.media video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.media-placeholder {
		width: 100%;
		height: 100%;
		background-color: var(--color-border);
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 16px;
		justify-content: center;
	}
	.header {
		display: flex;
		gap: 1ch;
		align-items: center;
		color: var(--color-text-primary);
	}
	h3 {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
	}
	p {
		margin: 0;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
	}
</style>
