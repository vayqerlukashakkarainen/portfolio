<h4>About</h4>
<p>
	My first real main project when I was 17, the codes still lives today and probably in the shape
	you can imagine. 2DLandz was all about fun and no restrictions, concerns of scale and
	maintainability (most due to incompetence). You could play locally up to 4 players, all sharing
	the same screen. The goal was to eliminate all players by purchasing weapons, all having a special
	ability.
</p>
<p>
	The first project is always special, and I am happy that I have successfully saved the source
	code, even after so many years :)
</p>
<h4>What I learned</h4>
<p>
	What you can expect to learn during a Game development class in your seventeen. Game loop, what
	makes a game fun, state handling etc. The basics!
</p>

<div class="media">
	<div class="media-full">
		<video controls playsinline style="width:100%">
			<source src="/images/2d-landz/video1.mp4" type="video/mp4" />
		</video>
	</div>
	<div class="media-row3">
		<img src="/images/2d-landz/img1.png" alt="" loading="lazy" />
		<img src="/images/2d-landz/img2.png" alt="" loading="lazy" />
		<img src="/images/2d-landz/img3.png" alt="" loading="lazy" />
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
