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
	{#if isVideo(project.bgImg ?? '')}
		<video class="bg" playsInline autoplay muted loop>
			<source src={`${base}/${project.bgImg}`} type="video/mp4" />
		</video>
	{:else if project.bgImg}
		<img class="bg" src={`${base}/${project.bgImg}`} alt={project.title} />
	{:else}
		<div class="bg bg-placeholder"></div>
	{/if}

	<div class="overlay"></div>

	<div class="content">
		<div class="header">
			<h3>{project.title}</h3>
			{#if project.isExternalUrl}
				<Icon icon="mdi:open-in-new" />
			{/if}
		</div>
		<p>{project.description}</p>
		<div class="badges">
			{#if project.wip}
				<span class="in-dev">IN PROGRESS</span>
			{/if}
		</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		display: block;
		position: relative;
		overflow: hidden;
		height: 200px;
		transition:
			box-shadow 200ms ease,
			border-color 200ms ease;
	}
	a:hover {
		border-color: var(--color-text-primary);
		box-shadow: 4px 4px 0 var(--color-text-primary);
	}
	.bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.bg-placeholder {
		background-color: var(--color-border);
	}
	.overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.75) 0%,
			rgba(0, 0, 0, 0.1) 60%,
			transparent 100%
		);
	}
	.content {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 4px;
		padding: 14px;
	}
	.header {
		display: flex;
		gap: 1ch;
		align-items: center;
		color: #fff;
	}
	h3 {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: #fff;
	}
	p {
		margin: 0;
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.75);
	}
	.badges {
		display: flex;
		gap: 4px;
		flex-wrap: wrap;
		margin-top: 2px;
	}
	.lars-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.3ch;
		font-size: 0.65rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: #000;
		background: #fff;
		border-radius: 3px;
		padding: 2px 6px;
		width: fit-content;
	}
</style>
