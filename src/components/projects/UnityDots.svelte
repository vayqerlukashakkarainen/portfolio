<h4>About</h4>
<p>
	Starting to explore Unity DOTS, I wanted to try to create simple behaviour tree to utilize the
	amazing performance from the burst compiler. After much trial and error, a (very simple) prototype
	was born!
</p>
<h4>Challenges</h4>
<p>
	DOTS and ECS runs at a different level than ordinary C#, which was a huge challange to overcome.
	Since DOTS also does not utilize references, converting a BT tree into simple types and using them
	inside the burst compiler was probably the hardest nut to crack.
</p>
<div class="links">
	<a target="_blank" href="https://unity.com/dots">Read about DOTS</a>
	<a target="_blank" href="https://docs.unity3d.com/Packages/com.unity.burst@1.8/manual/index.html"
		>Read about ESC</a
	>
</div>

<style>
	.links {
		display: flex;
		gap: 12px;
	}
	.links > a {
		color: var(--color);
	}
</style>
