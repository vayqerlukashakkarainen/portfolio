<script>
	import { fade } from 'svelte/transition'
</script>

<h4 in:fade={{ duration: 200, delay: 0 }}>About</h4>
<div in:fade={{ duration: 200, delay: 80 }}>
	<p>
		A fully client-side web tool to convert images to native app icon formats (ICO, ICNS, PNG) with
		custom dimensions. No server required! All processing happens directly in your browser, ensuring
		your images never leave your device.
	</p>
	<p>
		Perfect for developers who need to quickly generate app icons for different platforms without
		relying on online services or installing desktop software.
	</p>
</div>

<h4 in:fade={{ duration: 200, delay: 160 }}>Features</h4>
<div in:fade={{ duration: 200, delay: 240 }}>
	<ul>
		<li>
			<strong>100% Client-Side:</strong> All processing happens in your browser - no data sent to servers
		</li>
		<li>
			<strong>Multiple Format Support:</strong> Convert to ICO (Windows), ICNS (macOS), and PNG (Linux)
			formats
		</li>
		<li><strong>Custom Dimensions:</strong> Set width and height independently (16-2048px)</li>
		<li><strong>Drag & Drop Interface:</strong> Easy file upload with visual feedback</li>
		<li><strong>Batch Download:</strong> Download all formats as a ZIP file</li>
		<li><strong>Real-time Preview:</strong> See your image before conversion</li>
		<li><strong>File Validation:</strong> Supports JPG, PNG, GIF, BMP, and WebP input formats</li>
		<li><strong>Static Hosting:</strong> Deploy to any static hosting service</li>
	</ul>
</div>

<h4 in:fade={{ duration: 200, delay: 320 }}>Challenges</h4>
<p in:fade={{ duration: 200, delay: 400 }}>Nothing, since it was vibe coded</p>

<div class="media" in:fade={{ duration: 200, delay: 480 }}>
	<img src="/images/icon-creator/img1.png" alt="" loading="lazy" />
</div>

<style>
	.media {
		margin-top: 1.5rem;
		border-radius: 4px;
		overflow: hidden;
	}
	.media img {
		width: 100%;
		display: block;
		border-radius: 4px;
	}
</style>
