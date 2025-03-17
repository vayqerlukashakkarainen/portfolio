<script lang="ts">
	import type { Project } from '$lib/project';
	import Icon from '@iconify/svelte';

	export let project: Project;
</script>

<a
	class={`project ${project.category}`}
	href={project.isExternalUrl ? project.url : project.url + project.slug}
	target={project.isExternalUrl ? '_blank' : '_self'}
>
	<div class="header">
		<h3>{project.title}</h3>
		{#if project.isExternalUrl}
			<Icon icon="gridicons:external" />
		{/if}
	</div>
	<p>{project.description}</p>
	{#if project.category === 'inProgress'}
		<span class="in-dev">IN DEVELOPMENT</span>
	{/if}
</a>

<style>
	.header {
		display: flex;
		gap: 1ch;
		align-items: center;
		color: white;
	}
	a {
		text-decoration: none;
	}

	.in-dev {
		background-color: var(--color);
		color: white;
		font-size: 12px;
		padding: 0.1rem 0.4rem;
		width: fit-content;
		border-radius: 0.6ch;
		margin-top: 1ch;
	}
</style>
