<script lang="ts">
	import { base } from '$app/paths';
	import { anyMediaInProject, type Project } from '$lib/project';
	import Icon from '@iconify/svelte';
	import MasonryGird from '../../../components/MasonryGrid.svelte';

	/** @type {import('./$types').PageData} */
	export let data: Project;

	$: hidden = true;
	const { anyMedia, anyVideo } = anyMediaInProject(data.slug);

	function onScroll(e: UIEvent) {
		const el = e.currentTarget as HTMLDivElement;

		if (el.scrollTop > 50 && hidden) {
			hidden = false;
		} else if (el.scrollTop <= 50 && !hidden) {
			hidden = true;
		}
	}

	function toggleVideos() {
		const videos = document.querySelectorAll('video');

		videos.forEach((v) => {
			if (v.paused) {
				v.play();
				return;
			}

			v.pause();
		});
	}
</script>

<div class={`page-theme ${data.category} ${anyMedia ? 'media' : ''}`}>
	<div class="inner"><MasonryGird slug={data.slug} /></div>
</div>
<div class="hidden">
	<div class="wrapper">
		<div class={`container outside ${data.category}`} class:c-hidden={hidden}>
			<div>
				{#if data.wip}
					<span class="in-dev">NOT FINISHED</span>
				{/if}
				<div class="meta">
					<h1>{data.title}<span>{data.date}</span></h1>
				</div>
			</div>
		</div>
		<div class={`container content ${data.category}`} on:scroll={onScroll}>
			<div>
				{#if data.wip}
					<span class="in-dev">NOT FINISHED</span>
				{/if}
				<div class="meta">
					<h1>{data.title}<span>{data.date}</span></h1>
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
			<div class="links footer">
				<a class="text {data.category}" href={base}
					><Icon icon="bxs:left-arrow" /> <span>Go back</span></a
				>
				{#if data.website}
					<a class="text" href={data.website} target="_blank">
						<Icon icon="gridicons:external" />
						<span>Visit website</span></a
					>
				{/if}
				{#if anyMedia}
					{#if anyVideo}
						<button class="text" on:click={toggleVideos}>
							<Icon icon="gridicons:video-camera" />
							<span>Toggle videos</span></button
						>
					{/if}
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.media {
		--transparent: transparent;
	}
	.hidden {
		overflow: hidden;
	}
	.meta span {
		font-size: 14px;
		padding-left: 8px;
	}
	.container.content h1 {
		margin-top: 0;
		margin-bottom: -18px;
		color: var(--color);
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100%;
	}
	.container {
		padding-top: 22px;
		padding-bottom: 22px;
		width: 100%;
		position: relative;
	}

	.container:not(.outside) {
		animation: in-3 300ms ease;
	}
	.container.content {
		background-color: rgba(0, 0, 0, 0.9);
		max-height: 60%;
		overflow: auto;
		position: relative;
		scrollbar-gutter: stable both-edges;
	}
	.container.outside {
		padding: 0;
		transition:
			opacity 200ms ease,
			transform 200ms ease;
		transform: translateY(0px);
		color: white;
	}
	.container.outside h1 {
		filter: drop-shadow(2px 4px 6px black);
		margin-top: 0;
	}
	.container.c-hidden {
		opacity: 0;
		transform: translateY(12px);
	}
	.page-theme {
		background-color: var(--transparent, var(--color));
		position: fixed;
		top: 0;
		bottom: 0;
		z-index: -1;
		animation: in 1s ease;
		animation-fill-mode: forwards;
		overflow: hidden;
	}
	.footer {
		position: sticky;
		bottom: 0;
	}
	a {
		text-decoration: none;
	}
	.text {
		cursor: pointer;
		font-family: 'Poppins';
		border: none;
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
	.text:hover {
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
	@media (max-width: 768px) {
		@keyframes in-2 {
			0% {
				transform: skewX(0deg);
				left: 30%;
				opacity: 0;
			}
			100% {
				transform: skewX(5deg);
				left: 50%;
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
				right: 50%;
			}
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
