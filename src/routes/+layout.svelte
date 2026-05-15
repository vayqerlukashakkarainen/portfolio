<script>
	import { preloadIcons } from '$lib/icons';
	import SiteFooter from '../components/SiteFooter.svelte';
	preloadIcons();
</script>

<slot />
<SiteFooter />
