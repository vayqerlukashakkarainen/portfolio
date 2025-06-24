<script lang="ts">
	import { base } from '$app/paths';
</script>

<div>
	<img src={`${base}/images/me.png`} alt="me" />
</div>

<style>
	div {
		border-radius: 100%;
		overflow: hidden;
		max-height: 200px;
		max-width: 200px;
		animation: fade-in 1s ease;
	}
	img {
		object-fit: contain;
		height: 100%;
		width: 100%;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
			transform: scale(0.9) translateY(12px);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateY(0px);
		}
	}
</style>
