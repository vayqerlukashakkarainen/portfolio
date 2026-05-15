<script>
	import Icon from '@iconify/svelte';
</script>

<footer>
	<nav class="footer-nav">
		<div class="footer-nav-group">
			<span class="footer-nav-label">Pages</span>
			<a href="/#top">Home</a>
			<a href="/lars">Lars</a>
		</div>
		<div class="footer-nav-group">
			<span class="footer-nav-label">Categories</span>
			<a href="/#apps">Apps</a>
			<a href="/#wacky">Wacky</a>
			<a href="/#boring">Boring websites</a>
			<a href="/#wordpress">WordPress extensions</a>
			<a href="/#dog">Cute pictures of my dog</a>
		</div>
	</nav>
	<div class="footer-bottom">
		<div class="icons">
			<a target="_blank" href="https://github.com/vayqerlukashakkarainen"
				><Icon icon="mdi:github" /></a
			>
			<a target="_blank" href="https://www.linkedin.com/in/lukas-hakkarainen-841254120/"
				><Icon icon="mdi:linkedin" /></a
			>
		</div>
		<p>Site made using SvelteKit</p>
	</div>
</footer>

<style>
	footer {
		max-width: 720px;
		margin: 0 auto;
		padding: 0 1.5rem 2rem;
	}

	.footer-nav {
		display: flex;
		gap: 3rem;
		padding: 2rem 0 1.5rem;
		border-top: 1px solid var(--color-border);
		margin-top: 3rem;
	}

	.footer-nav-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.footer-nav-label {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		opacity: 0.5;
		color: var(--color-text-primary);
		margin-bottom: 0.25rem;
	}

	.footer-nav a {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		text-decoration: none;
	}

	.footer-nav a:hover {
		color: var(--color-text-primary);
	}

	.footer-bottom {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border);
	}

	.footer-bottom p {
		margin: 0;
		font-size: 0.8rem;
		color: var(--color-text-secondary);
	}

	.icons {
		display: flex;
		gap: 0.75rem;
		font-size: 1.4rem;
	}

	.icons a {
		color: var(--color-text-secondary);
		text-decoration: none;
	}

	.icons a:hover {
		color: var(--color-text-primary);
	}
</style>
