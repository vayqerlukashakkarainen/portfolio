<script lang="ts">
	import { base } from '$app/paths';
	import { type Project } from '$lib/project';
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data: Project;

	let mounted = false;
	onMount(() => (mounted = true));
</script>

<svelte:head>
	<title>{data.title} — Lukas Hakkarainen</title>
</svelte:head>

<div class="page">
	{#if mounted}
		<div class="sticky-top" in:fade={{ duration: 200, delay: 0 }}>
			<a class="back" href={`${base}/`}>
				<Icon icon="mdi:arrow-left" /> Back
			</a>

			<header>
				<h1>{data.title}</h1>
				<p class="subtitle">{data.date}</p>
				{#if data.wip}
					<span class="in-dev">IN PROGRESS</span>
				{/if}
				{#if data.builtWithLars}
					<span class="lars-badge">⚡ Built with Lars</span>
				{/if}
			</header>
		</div>

		{#if data.pageContent}
			{#if data.pageContent.appRes || data.pageContent.devRes || data.pageContent.apiRes}
				<div class="resources" in:fade={{ duration: 200, delay: 160 }}>
					{#if data.pageContent.appRes}
						<div class="resource-group">
							<span class="resource-label">Links</span>
							<div class="resource-icons">
								{#each data.pageContent.appRes as res}
									<a target="_blank" href={res.url} title={res.text}>
										<Icon icon={res.icon} />
									</a>
								{/each}
							</div>
						</div>
					{/if}
					{#if data.pageContent.devRes}
						<div class="resource-group">
							<span class="resource-label">Built with</span>
							<div class="resource-icons">
								{#each data.pageContent.devRes as res}
									<a target="_blank" href={res.url} title={res.text}>
										<Icon icon={res.icon} />
									</a>
								{/each}
							</div>
						</div>
					{/if}
					{#if data.pageContent.apiRes}
						<div class="resource-group">
							<span class="resource-label">APIs</span>
							<div class="resource-icons">
								{#each data.pageContent.apiRes as res}
									<a target="_blank" href={res.url} title={res.text}>
										<Icon icon={res.icon} />
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</div>
				<hr />
			{/if}

			<div class="content" in:fade={{ duration: 200, delay: 200 }}>
				<svelte:component this={data.pageContent.description} />
			</div>
		{/if}

		<footer in:fade={{ duration: 200, delay: 280 }}>
			{#if data.website}
				<a href={data.website} target="_blank">
					<Icon icon="mdi:open-in-new" /> Visit website
				</a>
			{/if}
			{#if data.appUrl}
				<a href={data.appUrl} target="_blank">
					<Icon icon="mdi:open-in-new" /> View app
				</a>
			{/if}
		</footer>
	{/if}
</div>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
		font-family: 'Inter', sans-serif;
	}

	.sticky-top {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--color-bg);
		padding-top: 1.5rem;
		padding-bottom: 0.5rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid var(--color-border);
	}

	.back {
		display: inline-flex;
		align-items: center;
		gap: 0.4ch;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
		text-decoration: none;
		margin-bottom: 0.5rem;
	}
	.back:hover {
		color: var(--color-text-primary);
	}

	header {
		margin-bottom: 2rem;
	}

	h1 {
		margin: 0 0 0.4rem;
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.subtitle {
		margin: 0 0 1rem;
		font-size: 0.9rem;
		color: var(--color-text-secondary);
	}

	hr {
		border: none;
		border-top: 1px solid var(--color-border);
		margin: 1rem 0;
	}

	.resources {
		display: flex;
		gap: 2rem;
		margin-bottom: 0.5rem;
	}

	.resource-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.resource-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		opacity: 0.6;
		color: var(--color-text-primary);
	}

	.resource-icons {
		display: flex;
		gap: 0.75rem;
		font-size: 1.4rem;
	}

	.resource-icons a {
		color: var(--color-text-primary);
		text-decoration: none;
	}
	.resource-icons a:hover {
		color: var(--color-accent);
	}

	.content :global(h4) {
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		opacity: 0.6;
		color: var(--color-text-primary);
		margin: 1.5rem 0 0.5rem;
	}

	.content {
		margin-top: 1.5rem;
		line-height: 1.75;
		color: var(--color-text-secondary);
	}

	footer {
		margin-top: 3rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
		display: flex;
		gap: 1.5rem;
	}

	footer a {
		display: inline-flex;
		align-items: center;
		gap: 0.4ch;
		font-size: 0.9rem;
		color: var(--color-accent);
		text-decoration: none;
	}
	footer a:hover {
		text-decoration: underline;
	}
	.lars-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.3ch;
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-bg);
		background: var(--color-text-primary);
		border-radius: 3px;
		padding: 2px 6px;
		width: fit-content;
	}
</style>
