<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => (mounted = true));
</script>

<svelte:head>
	<title>Lars — Lukas Hakkarainen</title>
	<meta property="og:title" content="Lars — Lukas Hakkarainen" />
</svelte:head>

<div class="page">
	{#if mounted}
		<a class="back" href="/" in:fade={{ duration: 200, delay: 0 }}>← Back</a>

		<header in:fade={{ duration: 200, delay: 60 }}>
			<h1>Lars</h1>
			<p class="subtitle">An AI agent system I'm building</p>
		</header>

		<section in:fade={{ duration: 200, delay: 120 }}>
			<h2>What is Lars?</h2>
			<p>
				Lars is a personal AI agent system built around persistent, context-aware agents that can
				see, hear, speak, and act. Agents run as specialised sessions with tools, memory, and access
				to connected devices like phones, glasses, and speakers.
			</p>
		</section>

		<section in:fade={{ duration: 200, delay: 180 }}>
			<h2>The Ecosystem</h2>
			<p>Lars is made up of several layers:</p>
			<ul>
				<li>
					<strong>agent-core</strong> — the runtime that manages agent sessions, tools, and memory
				</li>
				<li>
					<strong>lars-tore</strong> — the registry for specialisations, skills, and apps
				</li>
				<li>
					<strong>lars-run</strong> — the app store and execution layer for installable agent apps
				</li>
				<li>
					<strong>Device integrations</strong> — agents can interface with GPS, camera, microphone, speaker,
					and screen on connected devices
				</li>
				<li>
					<strong>MCP support</strong> — agents can connect to any Model Context Protocol server
				</li>
			</ul>
		</section>

		<section in:fade={{ duration: 200, delay: 240 }}>
			<h2>This portfolio</h2>
			<p>
				This site was built with Lars. The projects, layout, transitions, and media were all added
				by Lars agents working in parallel git worktrees — each agent owning a branch and merging
				into main when done.
			</p>
		</section>

		<section in:fade={{ duration: 200, delay: 300 }}>
			<h2>Status</h2>
			<p>Active development. Lars is a living project.</p>
		</section>
	{/if}
</div>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1.5rem 6rem;
		font-family: 'Inter', sans-serif;
	}

	.back {
		display: inline-flex;
		align-items: center;
		gap: 0.4ch;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
		text-decoration: none;
		margin-bottom: 2.5rem;
	}

	.back:hover {
		color: var(--color-text-primary);
	}

	header {
		margin-bottom: 3rem;
	}

	h1 {
		margin: 0 0 0.4rem;
		font-size: 3rem;
		font-weight: 700;
		color: var(--color-text-primary);
		letter-spacing: -0.02em;
	}

	.subtitle {
		margin: 0;
		font-size: 1.15rem;
		color: var(--color-text-secondary);
	}

	section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--color-text-primary);
		margin: 0 0 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.8rem;
		opacity: 0.6;
	}

	p {
		margin: 0 0 0.75rem;
		line-height: 1.75;
		color: var(--color-text-secondary);
		font-size: 1rem;
	}

	ul {
		margin: 0;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	li {
		line-height: 1.65;
		color: var(--color-text-secondary);
		font-size: 1rem;
	}

	strong {
		color: var(--color-text-primary);
		font-weight: 600;
	}
</style>
