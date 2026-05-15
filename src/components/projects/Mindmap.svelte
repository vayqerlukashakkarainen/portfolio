<script>
	import { fade } from 'svelte/transition';
</script>

<h4 in:fade={{ duration: 200, delay: 0 }}>About</h4>
<p in:fade={{ duration: 200, delay: 80 }}>
	A standalone browser-based mind mapping tool built entirely with vanilla TypeScript and Vite — no
	frameworks. Features a dot-grid canvas with draggable nodes, curved bezier edges, and a frosted
	glass UI aesthetic.
</p>

<h4 in:fade={{ duration: 200, delay: 160 }}>Features</h4>
<ul in:fade={{ duration: 200, delay: 240 }}>
	<li>Three node types — Text, Icon, and resizable Image nodes</li>
	<li>Drag-to-reposition nodes on a dot-grid canvas</li>
	<li>Curved bezier edges connecting nodes</li>
	<li>Multi-map save and restore with a sidebar browser</li>
	<li>Undo / redo support</li>
	<li>localStorage persistence — no backend required</li>
	<li>Deployed via GitHub Actions to GitHub Pages</li>
</ul>

<h4 in:fade={{ duration: 200, delay: 320 }}>What I learned</h4>
<p in:fade={{ duration: 200, delay: 400 }}>
	Building a canvas-style interactive app without a framework pushed me to think carefully about
	state management and DOM coordination by hand. Getting bezier edge routing and drag interactions
	to feel smooth in vanilla TypeScript was a satisfying challenge.
</p>
