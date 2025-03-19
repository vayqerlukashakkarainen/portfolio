<script lang="ts">
	import { base } from '$app/paths';
	import type { Project } from '$lib/project';
	import Icon from '@iconify/svelte';
	import MasonryGird from '../../../components/MasonryGrid.svelte';

	/** @type {import('./$types').PageData} */
	export let data: Project;
</script>

<div class={`page-theme ${data.category}`}>
	<div class="inner"><MasonryGird slug={data.slug} /></div>
</div>
<div class="wrapper">
	<div class={`container ${data.category}`}>
		<div>
			{#if data.wip}
				<span class="in-dev">NOT FINISHED</span>
			{/if}
			<div class="meta">
				<h1>{data.title}</h1>
				<p>{data.date}</p>
			</div>
		</div>

		{#if data.pageContent}
			<div class={`resource-card`}>
				{#if data.pageContent.appRes}
					<div class="resources">
						<h3>Links</h3>
						<div>
							{#each data.pageContent.appRes as res}
								<a target="_blank" href={res.url}>
									<Icon icon={res.icon} />
								</a>
							{/each}
						</div>
					</div>
				{/if}
				{#if data.pageContent.devRes}
					<div class="resources">
						<h3>Resources</h3>
						<div>
							{#each data.pageContent.devRes as res}
								<a target="_blank" href={res.url}>
									<Icon icon={res.icon} />
								</a>
							{/each}
						</div>
					</div>
				{/if}
				{#if data.pageContent.apiRes}
					<div class="resources">
						<div>
							<h3>API</h3>
							{#each data.pageContent.apiRes as res}
								<a target="_blank" href={res.url}>
									<Icon icon={res.icon} />
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>
			<svelte:component this={data.pageContent.description} />
		{/if}

		<div class="links">
			<a class="text {data.category}" href={base}
				><Icon icon="bxs:left-arrow" /> <span>Go back</span></a
			>
			{#if data.website}
				<a class="text" href={data.website} target="_blank">
					<Icon icon="gridicons:external" />
					<span>Visit website</span></a
				>
			{/if}
		</div>
	</div>
</div>

<style>
	.meta {
		display: flex;
		gap: 8px;
		align-items: baseline;
	}
	.meta > p {
		color: hsl(from var(--color) h s calc(l - 10));
	}
	h1 {
		margin-top: 0;
		margin-bottom: -18px;
		color: var(--color);
	}
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100%;
	}
	.container {
		background-color: rgba(0, 0, 0, 0.9);
		padding-top: 22px;
		padding-bottom: 22px;
		width: 100%;
		animation: in-3 300ms ease;
	}
	.page-theme {
		background-color: var(--color);
		position: fixed;
		top: 0;
		bottom: 0;
		z-index: -1;
		animation: in 1s ease;
		animation-fill-mode: forwards;
		overflow: hidden;
	}
	a {
		text-decoration: none;
	}
	a.text {
		color: white;
		font-size: 0.9rem;
		font-weight: bold;
		width: fit-content;
		display: flex;
		gap: 4px;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.06);
		padding: 4px 8px;
		border-radius: 2px;
	}
	a.text:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.resource-card {
		display: flex;
		gap: 4ch;
		position: relative;
	}
	.resource-card::after {
		content: ' ';
		position: absolute;
		inset: -2px;
		z-index: -1;
		border-radius: 2ch;
	}

	.resources *:not(h3) {
		font-size: 1.4rem;
		color: white;
	}

	h3 {
		margin: 0;
		font-size: 0.7rem;
		margin-bottom: 0.2rem;
		opacity: 0.6;
		font-weight: normal;
	}

	.inner {
		position: relative;
		animation: in-2 1s ease;
		animation-fill-mode: forwards;
		max-width: 300px;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	@keyframes in-2 {
		0% {
			transform: skewX(0deg);
			left: 30%;
			opacity: 0;
		}
		100% {
			transform: skewX(5deg);
			left: 70%;
			opacity: 1;
		}
	}
	@keyframes in {
		0% {
			transform: skewX(0deg);
			right: 100%;
		}
		100% {
			transform: skewX(-5deg);
			right: 70%;
		}
	}
	@keyframes in-3 {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
