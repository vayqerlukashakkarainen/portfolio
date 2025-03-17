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
		max-width: 312px;
		border-radius: 22px;
		border: none;
		padding: 0;
		background-color: transparent;
		cursor: pointer;
		transition: transform 400ms ease;
		perspective: 1000px;
	}
	button:hover {
		transform: scale(1.01);
	}
	img {
		object-fit: cover;
		max-width: 100%;
		transform-style: preserve-3d;
		border-radius: 22px;
		border: 4px solid;
		border-color: var(--color-teal-900);

		background-origin: border-box;
		background-clip: padding-box, border-box;
		background-image: linear-gradient(transparent, transparent),
			linear-gradient(calc(var(--test) * 1turn), #b25225, #e13c87);

		transition: border-color 400ms linear;
	}
	button.clicked img {
		animation: flip 1s ease;
	}
	.same {
		animation: 2s test infinite;
		border-color: transparent;
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
