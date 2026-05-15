<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	let mounted = false;
	onMount(() => (mounted = true));
</script>

<svelte:head>
	<title>Lars — Lukas Hakkarainen</title>
	<meta property="og:title" content="Lars — Lukas Hakkarainen" />
</svelte:head>

<div class="page">
	{#if mounted}
		<a class="back" href="/" in:fade={{ duration: 200, delay: 0 }}>← Back</a>

		<header in:fade={{ duration: 200, delay: 60 }}>
			<h1>Lars</h1>
			<p class="subtitle">An AI agent system built around one idea: extend the person, not replace them.</p>
		</header>

		<section in:fade={{ duration: 200, delay: 120 }}>
			<h2>Philosophy</h2>
			<p>
				I'm not a carpenter. But I know enough to be analytic about it — I can probably tell a bad
				approach from a good one. Lars is there to extend my knowledge base in carpentry, not to
				replace the judgment I bring. The same logic applies to software development, which is my
				actual domain. I know what good and bad architecture looks like. I understand the pitfalls
				and the core mechanics of how a computer operates. That knowledge is what lets me stay in
				control when I use Lars — I'm directing it, not being replaced by it.
			</p>
			<p>
				AI is most powerful when the person using it knows enough to evaluate what comes back.
				That's the relationship Lars is designed for: a wider circle around your current knowledge
				domain, for every industry you touch.
			</p>
			<p>
				You can't be in control if you replace yourself. But you can replace chores, friction, and
				communication.
			</p>
		</section>

		<section in:fade={{ duration: 200, delay: 180 }}>
			<h2>An agent for every domain</h2>
			<p>
				Lars is industry-agnostic at its core. It isn't tied to one vertical — it can become Henry,
				a specialised agent for the garment industry, with apps only accessible to Henry and its
				industry, skills built specifically for that domain. Or it can be something else entirely for
				someone else.
			</p>
			<p>
				The important thing is that domains stay isolated. You can talk to Lars and Henry, but they
				don't know about each other. There's no risk of one agent polluting another's context,
				because they live in entirely separate spaces. Each agent is its own entity, shaped by its
				industry and the person who configured it.
			</p>
		</section>

		<section in:fade={{ duration: 200, delay: 240 }}>
			<h2>Conversation beyond text</h2>
			<p>
				Lars isn't a chat interface. You're not bound to typing — you can talk, speak, explain, play
				audio, connect devices, show pictures. The richer the input, the better the understanding,
				and the better the decisions Lars can make on your behalf.
			</p>
			<p>
				This matters because real communication is multimodal. A lot of context is lost when you
				flatten everything into text. Lars is designed to receive that context as naturally as
				possible.
			</p>
		</section>

		<section in:fade={{ duration: 200, delay: 300 }}>
			<h2>Devices &amp; smart glasses</h2>
			<p>
				The mobile app extends Lars' reach. It can connect to Bluetooth devices, speak through
				speakers, be aware of what's connected, and decide where and how to respond. Lars travels
				with you.
			</p>
			<p>
				I'm also building support for Mentra smart glasses via MetraOS open source software. Instead
				of walking around with your phone taking pictures, Lars connects directly through the
				glasses. It can pull device info, photos, video — anything the glasses can capture. And of
				course speak, since Mentra comes with built-in speakers and a mic. Lars can see what you
				see and hear what you hear.
			</p>
		</section>

		<section in:fade={{ duration: 200, delay: 360 }}>
			<h2>Why I'm building this</h2>
			<p>
				AI is great on its own. But it needs safe constraints and a safe environment to behave and
				act securely — and when it has those, it performs even better. I want to push AI usage to
				the common person, as an assistant shaped for their specific industry and life. Be it at
				home writing groceries, or connected to Home Assistant as a smart home hub.
			</p>
			<p>
				Lars isn't one single entity. Lars can be whatever entity, with whatever connections, for
				whoever needs it. The goal is simple: make life easier, and more accessible.
			</p>
		</section>

		<section in:fade={{ duration: 200, delay: 420 }}>
			<h2>Architecture</h2>
			<ul>
				<li>
					<strong>AI core harness system</strong> — the runtime where Lars operates: manages agent
					sessions, tools, memory, and lifecycle
				</li>
				<li>
					<strong>Application proxy</strong> — actions are performed by Lars here, with secrets
					securely stored and never exposed to the agent
				</li>
				<li>
					<strong>Agent app store</strong> — an installable app ecosystem targeted specifically for
					agents, not end users
				</li>
				<li>
					<strong>Mobile application</strong> — have Lars with you at all times, with Bluetooth,
					speakers, and device awareness
				</li>
				<li>
					<strong>Smart glasses connection</strong> — Mentra integration via MetraOS lets Lars see
					what you see and hear what you hear
				</li>
				<li>
					<strong>Conversational models</strong> — Lars can speak through its thinking process, not
					just respond in text
				</li>
			</ul>
		</section>

		<section in:fade={{ duration: 200, delay: 540 }}>
			<h2>Apps</h2>
			<div class="app-grid">
				<div class="app-card">
					<div class="app-icon"><Icon icon="mdi:github" /></div>
					<div class="app-info">
						<span class="app-name">GitHub</span>
						<span class="app-desc">Interact with repos, PRs, and issues. Review code, reply to comments, manage labels.</span>
					</div>
				</div>
				<div class="app-card">
					<div class="app-icon"><Icon icon="mdi:connection" /></div>
					<div class="app-info">
						<span class="app-name">MCP</span>
						<span class="app-desc">Connect to any Model Context Protocol server and call its tools.</span>
					</div>
				</div>
				<div class="app-card">
					<div class="app-icon"><Icon icon="mdi:spotify" /></div>
					<div class="app-info">
						<span class="app-name">Spotify</span>
						<span class="app-desc">Control playback, search tracks, manage playlists across devices.</span>
					</div>
				</div>
				<div class="app-card">
					<div class="app-icon"><Icon icon="mdi:tunnel" /></div>
					<div class="app-info">
						<span class="app-name">ngrok</span>
						<span class="app-desc">Expose local ports to the internet. Manage named tunnels securely.</span>
					</div>
				</div>
				<div class="app-card">
					<div class="app-icon"><Icon icon="mdi:qrcode" /></div>
					<div class="app-info">
						<span class="app-name">QR</span>
						<span class="app-desc">Generate QR codes from any text or URL, push to connected screens.</span>
					</div>
				</div>
				<div class="app-card">
					<div class="app-icon"><Icon icon="mdi:dns" /></div>
					<div class="app-info">
						<span class="app-name">GoDaddy DNS</span>
						<span class="app-desc">Manage DNS records for any domain — A, CNAME, MX, TXT and more.</span>
					</div>
				</div>
			</div>
		</section>
	{/if}
</div>

<style>
	.page {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1.5rem 6rem;
		font-family: 'Inter', sans-serif;
	}

	.back {
		display: inline-flex;
		align-items: center;
		gap: 0.4ch;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
		text-decoration: none;
		margin-bottom: 2.5rem;
	}

	.back:hover {
		color: var(--color-text-primary);
	}

	header {
		margin-bottom: 3rem;
	}

	h1 {
		margin: 0 0 0.4rem;
		font-size: 3rem;
		font-weight: 700;
		color: var(--color-text-primary);
		letter-spacing: -0.02em;
	}

	.subtitle {
		margin: 0;
		font-size: 1.15rem;
		color: var(--color-text-secondary);
	}

	section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--color-text-primary);
		margin: 0 0 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.8rem;
		opacity: 0.6;
	}

	p {
		margin: 0 0 0.75rem;
		line-height: 1.75;
		color: var(--color-text-secondary);
		font-size: 1rem;
	}

	ul {
		margin: 0;
		padding-left: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	li {
		line-height: 1.65;
		color: var(--color-text-secondary);
		font-size: 1rem;
	}

	strong {
		color: var(--color-text-primary);
		font-weight: 600;
	}

	.app-grid {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.app-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.875rem 1rem;
		border: 1px solid var(--color-border);
		border-radius: 6px;
		transition: border-color 150ms ease;
	}

	.app-card:hover {
		border-color: var(--color-text-primary);
	}

	.app-icon {
		font-size: 1.75rem;
		color: var(--color-text-primary);
		flex-shrink: 0;
		width: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.app-name {
		display: block;
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.app-desc {
		display: block;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
		margin-top: 0.15rem;
	}
</style>
