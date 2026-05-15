<script>
	import { projects } from '$lib/project';
	import { allImagesSame, getRandomImage } from '$lib/images';
	import Icon from '@iconify/svelte';
	import Project from '../components/Project.svelte';
	import Image from '../components/Image.svelte';
	import Me from '../components/Me.svelte';
	import Dialog from '../components/Dialog.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => (mounted = true));

	$: allSame = false;
	$: appsProjects = projects.filter((p) => p.category === 'apps').sort((a, b) => b.date - a.date);
	$: wackyProjects = projects.filter((p) => p.category === 'wacky').sort((a, b) => b.date - a.date);
	$: boringProjects = projects
		.filter((p) => p.category === 'boringWebsites')
		.sort((a, b) => b.date - a.date);
	$: wordpressProjects = projects
		.filter((p) => p.category === 'wordpress')
		.sort((a, b) => b.date - a.date);
</script>

<svelte:head>
	<meta property="og:title" content="Hey! - Lukas Hakkarainen" />
	<meta property="og:image" content={`https://luhakk.com/urlimg.png`} />
</svelte:head>

<div class="container">
	{#if mounted}
		<div class="me" in:fade={{ duration: 200, delay: 0 }}>
			<Me />
			<h1 class="primary">
				<Dialog
					text={'<wait=30>Hello!<wait=40> This is<wait=10><speed=20>... <wait=12><speed=7>pretty much <wait=30>my portfolio'}
				/>
			</h1>
		</div>
		<p in:fade={{ duration: 200, delay: 80 }}>
			Self-taught software developer based in Sweden's countryside, close to Borås, constantly
			tinkering on my house and what I find fun software. Currently working as a team leader
			@Rudholm Technology AB.
		</p>
		<a
			in:fade={{ duration: 200, delay: 160 }}
			href="https://www.linkedin.com/in/lukas-hakkarainen-841254120/"
		>
			Reach out to me on LinkedIn
		</a>
		<div class="breakout pt-2">
			<div in:fade={{ duration: 200, delay: 240 }}>
				<h2 class="primary">Apps</h2>
				<div class="project-grid">
					{#each appsProjects as project, i}
						<div in:fade={{ duration: 200, delay: i * 60 }}>
							<Project {project} />
						</div>
					{/each}
				</div>
			</div>

			<div in:fade={{ duration: 200, delay: 320 }}>
				<h2 class="primary">Wacky</h2>
				<div class="project-grid">
					{#each wackyProjects as project, i}
						<div in:fade={{ duration: 200, delay: i * 60 }}>
							<Project {project} />
						</div>
					{/each}
				</div>
			</div>

			<div in:fade={{ duration: 200, delay: 400 }}>
				<h2 class="primary">Boring websites</h2>
				<div class="project-grid">
					{#each boringProjects as project, i}
						<div in:fade={{ duration: 200, delay: i * 60 }}>
							<Project {project} />
						</div>
					{/each}
				</div>
			</div>

			<div in:fade={{ duration: 200, delay: 480 }}>
				<h2 class="primary">WordPress</h2>
				<div class="project-grid">
					{#each wordpressProjects as project, i}
						<div in:fade={{ duration: 200, delay: i * 60 }}>
							<Project {project} />
						</div>
					{/each}
				</div>
			</div>

			<div in:fade={{ duration: 200, delay: 560 }}>
				<h2 class="primary">Cute pictures of my dog</h2>
				<div class="project-grid">
					{#each { length: 3 } as _, i}
						<div in:fade={{ duration: 200, delay: i * 60 }}>
							<Image
								onChange={() => {
									allSame = allImagesSame();
								}}
								{allSame}
								index={i}
								image={getRandomImage(i)}
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="yay" class:show={allSame}>
			<p>Nice work! Here is your reward</p>
			<div>
				<Icon icon="mdi:trophy" />
			</div>
		</div>
		<footer class="pb-2">
			<div class="icons">
				<a target="_blank" href="https://github.com/vayqerlukashakkarainen"
					><Icon icon="mdi:github" /></a
				>
				<a target="_blank" href="https://www.linkedin.com/in/lukas-hakkarainen-841254120/"
					><Icon icon="mdi:linkedin" /></a
				>
			</div>
			<p>Site made using SvelteKit</p>
		</footer>
	{/if}
</div>

<style>
	.me {
		padding-top: calc(1.5vw + 100px);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0;
		padding-bottom: 60px;
		text-align: left;
	}
	.me h1 {
		margin-top: -82px;
		font-size: calc(1vw + 42px);
		filter: drop-shadow(2px 4px 6px #00000087);
		height: 160px;
	}
	.yay {
		opacity: 0;
		transform: translateY(0px);
		transition: all 300ms ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
	}
	.yay.show {
		opacity: 1;
		transform: translateY(12px);
	}
	.yay p {
		margin: 0;
	}
	.yay.show > div {
		animation: rubber-band 1.3s linear;
		animation-delay: 300ms;
	}
	a {
		color: var(--color-teal-500);
	}

	@keyframes rubber-band {
		0% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}

		30% {
			-webkit-transform: scale3d(1.25, 0.75, 1);
			transform: scale3d(1.25, 0.75, 1);
		}

		40% {
			-webkit-transform: scale3d(0.75, 1.25, 1);
			transform: scale3d(0.75, 1.25, 1);
		}

		50% {
			-webkit-transform: scale3d(1.15, 0.85, 1);
			transform: scale3d(1.15, 0.85, 1);
		}

		65% {
			-webkit-transform: scale3d(0.95, 1.05, 1);
			transform: scale3d(0.95, 1.05, 1);
		}

		75% {
			-webkit-transform: scale3d(1.05, 0.95, 1);
			transform: scale3d(1.05, 0.95, 1);
		}

		100% {
			-webkit-transform: scale3d(1, 1, 1);
			transform: scale3d(1, 1, 1);
		}
	}
</style>
