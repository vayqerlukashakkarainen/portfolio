<script lang="ts">
	import { isVideo, type Project } from '$lib/project';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	export let project: Project;
</script>

<a
	class={`project ${project.category}`}
	style={!isVideo(project.bgImg ?? '') ? `background-image: url(${base}/${project.bgImg})` : ''}
	href={project.isExternalUrl ? project.url : `${base}/` + project.url + project.slug}
	target={project.isExternalUrl ? '_blank' : '_self'}
>
	<div class="content">
		<div class="header">
			<h3>{project.title}</h3>
			{#if project.isExternalUrl}
				<Icon icon="gridicons:external" />
			{/if}
		</div>

		<p>{project.description}</p>
		{#if project.wip}
			<span class="in-dev">IN PROGRESS</span>
		{/if}
	</div>
	{#if isVideo(project.bgImg ?? '')}
		<video playsInline={true} autoPlay={true} muted={true} loop={true}>
			<source src={`${base}/${project.bgImg}`} type="video/mp4" />
		</video>
	{/if}
</a>

<style>
	video {
		position: absolute;
		inset: -22px;
		min-width: calc(100% + 44px);
		height: calc(100% + 44px);
	}
	.project {
		padding: 0;
	}
	.project:not(.active):hover {
		background-position: 10% 20%;
	}

	.date {
		font-size: 12px;
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 2px;
		position: relative;
		z-index: 1;
		padding: 12px;
	}
	.content::before {
		content: '';
		position: absolute;
		left: -50%;
		top: -10%;
		right: -50%;
		bottom: -120%;
		z-index: -1;
		background: radial-gradient(rgba(0, 0, 0, 0.757), transparent 70%);
	}
	.header {
		display: flex;
		gap: 1ch;
		align-items: center;
		color: white;
	}
	a {
		text-decoration: none;
		height: 220px;
		display: flex;
		justify-content: end;
		background-size: cover;
		background-position: 0%;
		position: relative;
		overflow: hidden;
	}
</style>
