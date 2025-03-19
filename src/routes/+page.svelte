<script>
	import { base } from '$app/paths';
	import { projects } from '$lib/project';
	import { allImagesSame, getRandomImage } from '$lib/images';
	import Icon from '@iconify/svelte';
	import Project from '../components/Project.svelte';
	import Image from '../components/Image.svelte';
	import Me from '../components/Me.svelte';

	$: allSame = false;
</script>

<div class="container center">
	<div class="me">
		<Me />
		<h1 class="primary">Hello this is my portfolio (kinda)</h1>
	</div>
	<p>
		Developer based in Swedens country side (Close to Borås) constantly tinkering on my house and
		(what I find) fun software, currently working as team leader @Rudholm Technology AB
	</p>
	<h2 class="primary">Some stuff I am probably working on</h2>
	<div class="project-grid">
		{#each projects.sort((a, b) => b.date - a.date) as project}
			<Project {project} />
		{/each}
	</div>
	<h2 class="primary">Cute pictures of my dog</h2>
	<div class="project-grid breakout">
		{#each { length: 3 } as _, i}
			<Image
				onChange={() => {
					allSame = allImagesSame();
				}}
				{allSame}
				index={i}
				image={getRandomImage(i)}
			/>
		{/each}
	</div>
	<div class="yay" class:show={allSame}>
		<p>Nice work! Here is your reward</p>
		<div>
			<Icon icon="fxemoji:trophy" />
		</div>
	</div>
	<footer>
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
</div>

<style>
	.me {
		padding-top: calc(1.5vw + 100px);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		padding-bottom: 60px;
	}
	.me h1 {
		margin-top: -82px;
		font-size: calc(1vw + 42px);
		filter: drop-shadow(2px 4px 6px #00000087);
	}
	.center {
		text-align: center;
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
