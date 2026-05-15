<script>
	import { fade } from 'svelte/transition'
</script>

<h4 in:fade={{ duration: 200, delay: 0 }}>About</h4>
<p in:fade={{ duration: 200, delay: 80 }}>
	A road trip platform designed for Swedes to explore their own country first. It featured
	handpicked destinations across Sweden, curated through an admin portal and accessible to all
	paying users.
</p>
<h4 in:fade={{ duration: 200, delay: 160 }}>Challenges</h4>
<p in:fade={{ duration: 200, delay: 240 }}>
	My most ambitious project yet—though it currently does not see the light of day, it still holds a
	special place in my heart. Vayqer was my first major software development endeavor, featuring
	custom authentication and authorization, multiple frontends (iOS, Android, and web), and a .NET C#
	backend. With no prior experience working on a project of this scale (and no AI to assist me!), I
	navigated through documentation of varying quality, sought advice from a handful of helpful
	people, and gained invaluable experience in software development and project architecture.
</p>
<h4 in:fade={{ duration: 200, delay: 320 }}>What I learned</h4>
<p in:fade={{ duration: 200, delay: 400 }}>
	Keep it simple—don't overcomplicate things, and definitely don't use three different tech stacks
	for cross-platform development when you are a single developer!
</p>

<div class="media" in:fade={{ duration: 200, delay: 480 }}>
	<div class="media-full">
		<video controls playsinline style="width:100%">
			<source src="/images/vayqer/video2.mp4" type="video/mp4" />
		</video>
	</div>
	<div class="media-row3">
		<img src="/images/vayqer/img1.png" alt="" loading="lazy" />
		<img src="/images/vayqer/img2.png" alt="" loading="lazy" />
		<img src="/images/vayqer/img3.png" alt="" loading="lazy" />
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
