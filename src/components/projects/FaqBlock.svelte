<script>
	import { fade } from 'svelte/transition';
</script>

<h4 in:fade={{ duration: 200, delay: 0 }}>About</h4>
<p in:fade={{ duration: 200, delay: 80 }}>
	A custom WordPress Gutenberg block that renders a collapsible FAQ accordion with transparent
	background support. Built as a native block with a parent/child architecture — a FAQ container
	block that holds individual FAQ Item blocks.
</p>

<h4 in:fade={{ duration: 200, delay: 160 }}>Features</h4>
<ul in:fade={{ duration: 200, delay: 240 }}>
	<li>Collapsible accordion with smooth expand/collapse</li>
	<li>Parent FAQ block containing nested FAQ Item child blocks</li>
	<li>Transparent background support for flexible theming</li>
	<li>Full Gutenberg editor integration</li>
</ul>

<h4 in:fade={{ duration: 200, delay: 320 }}>What I learned</h4>
<p in:fade={{ duration: 200, delay: 400 }}>
	Working with WordPress block editor's parent/child block API and understanding how inner blocks
	compose — a pattern that is very different from classic shortcode-based WordPress development.
</p>
