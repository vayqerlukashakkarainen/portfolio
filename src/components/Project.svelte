<script lang="ts">
	import type { Project } from '$lib/project';
	import Icon from '@iconify/svelte';
	import { base } from '$app/paths';

	export let project: Project;
</script>

<a
	class={`project ${project.category}`}
	class:wip={project.wip}
	href={project.isExternalUrl ? project.url : `${base}/` + project.url + project.slug}
	target={project.isExternalUrl ? '_blank' : '_self'}
>
	<p class="date">{project.date}</p>
	<div class="header">
		<h3>{project.title}</h3>
		{#if project.isExternalUrl}
			<Icon icon="gridicons:external" />
		{/if}
	</div>

	<p>{project.description}</p>
	{#if project.wip}
		<span class="in-dev">NOT FINISHED</span>
	{/if}
</a>

<style>
	.date {
		font-size: 12px;
	}
	.header {
		display: flex;
		gap: 1ch;
		align-items: center;
		color: white;
	}
	a {
		text-decoration: none;
	}
</style>
