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
	}
	img {
		object-fit: contain;
		height: 100%;
		width: 100%;
	}
</style>
