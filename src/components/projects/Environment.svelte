<script>
	import { fade } from 'svelte/transition';
</script>

<h4 in:fade={{ duration: 200, delay: 0 }}>About</h4>
<div in:fade={{ duration: 200, delay: 80 }}>
	<p>
		From the start, I envisioned this as a settlement-building game (I have a soft spot for these).
		To keep things fresh, I needed a dynamic, randomized environment for every playthrough. While
		plenty of terrain generators exist in the Unity Asset Store, I wanted something more
		flexible—one that could handle not just terrain and biomes but additional features as well.
		Plus, I liked the challenge, so I built my own.
	</p>
	<p>
		In its current state, the system supports randomized islands, biomes, and various natural
		parameters like fertility and altitude preferences. It also handles randomized placement for
		natural props, including different tree types, rocks, plants, and grass.
	</p>
</div>
<h4 in:fade={{ duration: 200, delay: 160 }}>Challenges</h4>
<p in:fade={{ duration: 200, delay: 240 }}>
	Developing an atlas generator turned out to be tougher than I expected—but in my experience, a
	little naivety in development is usually a good thing! The hardest part was debugging; whenever
	something went wrong, it was a challenge to figure out whether the issue was in my code or my
	input. Tho wrapping it all inside a game loop was the hardest part. Which was a reason why the
	project got stale.
</p>
<h4 in:fade={{ duration: 200, delay: 320 }}>What I learned</h4>
<p in:fade={{ duration: 200, delay: 400 }}>
	I learned a lot from this project. LUT (Look up tables), weight based algorithms, modelling in
	blender.
</p>

<div class="media" in:fade={{ duration: 200, delay: 480 }}>
	<div class="media-full">
		<img src="/images/unity-environment/img1.png" alt="" loading="lazy" />
	</div>
	<div class="media-row2">
		<img src="/images/unity-environment/img2.png" alt="" loading="lazy" />
		<img src="/images/unity-environment/img3.png" alt="" loading="lazy" />
	</div>
</div>

<style>
	.media {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 8px;
		overflow: hidden;
		border-radius: 4px;
	}
	.media-full img {
		width: 100%;
		display: block;
		border-radius: 4px;
	}
	.media-row2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 8px;
	}
	.media-row2 img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 4px;
		display: block;
	}
</style>
