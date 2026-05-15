<script>
	import { fade } from 'svelte/transition'
</script>

<h4 in:fade={{ duration: 200, delay: 0 }}>About</h4>
<p in:fade={{ duration: 200, delay: 80 }}>
	Originated from my partner which requested a E-commerce site for handcrafted decorations for
	children rooms. Choosing WordPress and Woocommerce seemed like the easiest, cheapest and most
	tested solution, which could later be maintained and administrated without my involvement.
</p>
<h4 in:fade={{ duration: 200, delay: 160 }}>Challenges</h4>
<p in:fade={{ duration: 200, delay: 240 }}>Meeting the standards of my partner, without letting her down :)</p>

<div class="media" in:fade={{ duration: 200, delay: 320 }}>
	<video controls playsinline style="width:100%">
		<source src="/images/scroll-page/scrollable.mp4" type="video/mp4" />
	</video>
</div>

<style>
	.media {
		margin-top: 1.5rem;
		border-radius: 4px;
		overflow: hidden;
	}
</style>
