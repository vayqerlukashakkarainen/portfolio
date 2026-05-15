<script>
	import { fade } from 'svelte/transition'
</script>

<h4 in:fade={{ duration: 200, delay: 0 }}>About</h4>
<p in:fade={{ duration: 200, delay: 80 }}>
	A simple mobile app that suggests random movies or TV shows to watch. It uses the TMDb (The Movie
	Database) API for movie details and the JustWatch API for streaming availability. Two versions
	were deployed, one free version using ads, and another "Gold" version wihtout ads.
</p>
<h4 in:fade={{ duration: 200, delay: 160 }}>Challenges</h4>
<div in:fade={{ duration: 200, delay: 240 }}>
	<p>
		I wanted to explore hybrid mobile development beyond simple prototypes and experiment with
		deploying an app to production. It was an interesting challenge to configure iOS manifests and
		Android settings to make the app store-ready.
	</p>
	<p>
		Having never worked with ads before (specifically Google AdMob), seamlessly integrating them into
		the design without disrupting the user experience was a challenging but insightful process.
	</p>
</div>
<h4 in:fade={{ duration: 200, delay: 320 }}>What I learned</h4>
<p in:fade={{ duration: 200, delay: 400 }}>Nothing really, just a fun experience. Not everything has be about learning :)</p>

<div class="media" in:fade={{ duration: 200, delay: 480 }}>
	<div class="media-full">
		<video controls playsinline style="width:100%">
			<source src="/images/smam/3video.mp4" type="video/mp4" />
		</video>
	</div>
	<div class="media-grid2">
		<img src="/images/smam/1img1.png" alt="" loading="lazy" />
		<img src="/images/smam/2img2.png" alt="" loading="lazy" />
		<img src="/images/smam/img3.png" alt="" loading="lazy" />
		<img src="/images/smam/img4.png" alt="" loading="lazy" />
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
	.media-full video {
		width: 100%;
		display: block;
		border-radius: 4px;
	}
	.media-grid2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 8px;
	}
	.media-grid2 img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 4px;
		display: block;
	}
</style>
