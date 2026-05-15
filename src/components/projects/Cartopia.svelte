<h4>About</h4>
<p>
	I started developing a game that encourages players to explore real-world locations, interacting
	with them by setting up buildings or solving puzzles based on the site's characteristics. I've
	always been fascinated by castle ruins, historic landmarks, and natural wonders, so combining that
	passion with game development felt like a natural and motivating challenge.
</p>
<p>
	Cartopia has evolved beyond being just a "walk simulator" and is now a real-world
	settlement-building game. Each picked location on the world map presents new challenges and
	discoveries, leveraging OpenStreetMap's global contributions to highlight fascinating places. By
	integrating Uber's hexagonal grid technology (h3geo), the game ensures that all players interact
	within the same precise grid. This unlocks exciting mechanics for a multiplayer experience
	centered around exploration and settlement building.
</p>
<div class="links">
	<a href="https://h3geo.org/">Read about h3geo here</a>
</div>
<h4>Challenges</h4>
<p>Nothing yet (as of March 2025), but I want to develop my own shaders for ThreeJS!</p>

<div class="media">
	<div class="media-full">
		<video controls playsinline style="width:100%">
			<source src="/images/cartopia/video1.mp4" type="video/mp4" />
		</video>
	</div>
	<div class="media-row3">
		<img src="/images/cartopia/img2.png" alt="" loading="lazy" />
		<img src="/images/cartopia/img3.png" alt="" loading="lazy" />
		<img src="/images/cartopia/img4.png" alt="" loading="lazy" />
	</div>
</div>

<style>
	.links {
		display: flex;
		gap: 12px;
	}
	.links > a {
		color: var(--color);
	}
	.media {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 8px;
		overflow: hidden;
		border-radius: 4px;
	}
	.media-full video,
	.media-full img {
		width: 100%;
		display: block;
		border-radius: 4px;
	}
	.media-row3 {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
	}
	.media-row3 img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 4px;
		display: block;
	}
</style>
