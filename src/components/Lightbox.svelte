<script lang="ts">
	import { fade } from 'svelte/transition';

	export let images: string[] = [];
	export let index: number = 0;
	export let onClose: () => void;

	function prev() {
		index = (index - 1 + images.length) % images.length;
	}
	function next() {
		index = (index + 1) % images.length;
	}

	function handleKey(e: KeyboardEvent) {
		if (e.key === 'Escape') onClose();
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	}
</script>

<svelte:window on:keydown={handleKey} />

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div
	class="overlay"
	transition:fade={{ duration: 150 }}
	on:click={onClose}
	role="dialog"
	aria-modal="true"
	aria-label="Image lightbox"
>
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="modal" on:click|stopPropagation>
		<img src={images[index]} alt="Project image {index + 1} of {images.length}" />
		{#if images.length > 1}
			<button class="nav prev" on:click={prev} aria-label="Previous image">&#8249;</button>
			<button class="nav next" on:click={next} aria-label="Next image">&#8250;</button>
			<span class="counter" aria-live="polite">{index + 1} / {images.length}</span>
		{/if}
		<button class="close" on:click={onClose} aria-label="Close lightbox">&#x2715;</button>
	</div>
</div>

<style>
	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.85);
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal {
		position: relative;
		max-width: min(90vw, 1200px);
		max-height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img {
		max-width: 100%;
		max-height: 90vh;
		object-fit: contain;
		border-radius: 4px;
		display: block;
	}

	.nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(255, 255, 255, 0.12);
		border: none;
		color: #fff;
		font-size: 2rem;
		line-height: 1;
		padding: 0.4rem 0.75rem;
		border-radius: 4px;
		cursor: pointer;
		transition: background 150ms ease;
	}
	.nav:hover {
		background: rgba(255, 255, 255, 0.25);
	}
	.nav:focus-visible {
		outline: 2px solid #fff;
		outline-offset: 2px;
	}
	.prev {
		left: -3.5rem;
	}
	.next {
		right: -3.5rem;
	}

	.close {
		position: absolute;
		top: -2.5rem;
		right: 0;
		background: none;
		border: none;
		color: rgba(255, 255, 255, 0.7);
		font-size: 1.2rem;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		line-height: 1;
	}
	.close:hover {
		color: #fff;
	}
	.close:focus-visible {
		outline: 2px solid #fff;
		outline-offset: 2px;
		border-radius: 2px;
	}

	.counter {
		position: absolute;
		bottom: -2rem;
		left: 50%;
		transform: translateX(-50%);
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.5);
		white-space: nowrap;
	}

	@media (prefers-reduced-motion: reduce) {
		.overlay {
			transition: none;
		}
	}
</style>
