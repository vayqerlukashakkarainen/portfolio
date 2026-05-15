<script>
	import { fade } from 'svelte/transition';
</script>

<h4 in:fade={{ duration: 200, delay: 0 }}>About</h4>
<p in:fade={{ duration: 200, delay: 80 }}>
	A WordPress plugin that extends the REST API with a comprehensive set of admin endpoints for
	managing plugins, themes, posts, users, cron jobs, and site settings. Built specifically to power
	the Lars WordPress MCP app, enabling AI agents to administer WordPress sites programmatically.
</p>

<h4 in:fade={{ duration: 200, delay: 160 }}>Features</h4>
<ul in:fade={{ duration: 200, delay: 240 }}>
	<li>
		Full plugin &amp; theme lifecycle — list, install, upload, activate, deactivate, update, delete
	</li>
	<li>Content endpoints — browse posts, users, and custom post types with pagination and search</li>
	<li>
		Utility endpoints — flush rewrite rules, flush cache/transients, read error logs, inspect cron
	</li>
	<li>WP Application Passwords integration with a guided onboarding UI</li>
	<li>API reference tab with copy-to-clipboard curl snippets</li>
	<li>Custom upgrader skin to suppress filesystem output during installs</li>
</ul>

<h4 in:fade={{ duration: 200, delay: 320 }}>Challenges</h4>
<p in:fade={{ duration: 200, delay: 400 }}>
	Suppressing WordPress's filesystem and upgrade output during plugin/theme install operations
	required a custom upgrader skin — a non-obvious but necessary pattern when consuming these APIs
	from a REST context rather than the admin UI.
</p>
