<script>
	import { fade } from 'svelte/transition';
</script>

<h4 in:fade={{ duration: 200, delay: 0 }}>About</h4>
<p in:fade={{ duration: 200, delay: 80 }}>
	A WooCommerce-integrated WordPress plugin for selling configurable gift cards. Admins can define
	fixed denominations and option groups with custom labels and prices through a dedicated settings
	page, linked to a WooCommerce product.
</p>

<h4 in:fade={{ duration: 200, delay: 160 }}>Features</h4>
<ul in:fade={{ duration: 200, delay: 240 }}>
	<li>Admin settings page with dynamic amount and option group repeaters</li>
	<li>WooCommerce product integration — gift cards are sold as products</li>
	<li>Configurable denomination amounts and labeled option groups</li>
	<li>Fully PHP-rendered admin UI with vanilla JS repeater controls</li>
</ul>

<h4 in:fade={{ duration: 200, delay: 320 }}>Challenges</h4>
<p in:fade={{ duration: 200, delay: 400 }}>
	Managing dynamic repeater fields (amounts and option groups) within WordPress's admin form system
	without a JS framework — keeping the data structure intact through POST and PHP serialization.
</p>
