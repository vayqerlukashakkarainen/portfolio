<script lang="ts">
	import { base } from '$app/paths';
	import { getRandomImage, type Image } from '$lib/images';
	export let image: Image;
	export let index: number;
	export let allSame: boolean;
	export let onChange: () => void;

	let isClicked: boolean = false;
</script>

<button
	class:clicked={isClicked}
	on:click={(e) => {
		isClicked = true;

		setTimeout(() => {
			isClicked = false;
			onChange();
		}, 1000);
		setTimeout(() => {
			image = getRandomImage(index);
		}, 500);
	}}
>
	<img class:same={allSame} alt={image.caption} src={`${base}/images/${image.url}`} />
</button>

<style>
	@property --test {
		syntax: '<number>';
		initial-value: 0;
		inherits: false;
	}

	button {
		width: 100%;
		border-radius: 4px;
		border: 1px solid var(--color-border);
		padding: 0;
		background-color: transparent;
		cursor: pointer;
		transition:
			box-shadow 200ms ease,
			border-color 200ms ease;
		perspective: 1000px;
		overflow: hidden;
		display: block;
	}
	button:hover {
		border-color: var(--color-text-primary);
		box-shadow: 4px 4px 0 var(--color-text-primary);
	}
	img {
		object-fit: cover;
		width: 100%;
		height: 200px;
		display: block;
		transform-style: preserve-3d;
		transition: border-color 400ms linear;
	}
	button.clicked img {
		animation: flip 1s ease;
	}
	.same {
		animation: 2s test infinite;
	}

	@keyframes test {
		0% {
			--test: 0;
		}
		100% {
			--test: 1;
		}
	}

	@keyframes flip {
		0% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateY(720deg);
		}
	}
</style>
