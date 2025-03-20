<h4>About</h4>
<p>
	As I started exploring Unity DOTS, I wanted to create a simple behavior tree to take advantage of
	the burst compiler’s performance. After plenty of trial and error, a (very simple) prototype
	finally came to life.
</p>
<h4>Challenges</h4>
<p>
	DOTS and ECS operate on a different level than regular C#, making them a huge challenge to work
	with initally. Since DOTS doesn’t use classic C# references as classes (only structs), converting
	a behavior tree into simple types and making it work within the burst compiler was probably the
	toughest hurdle to overcome.
</p>
<h4>What I learned</h4>
<p>
	Having experience of C++ I was familiar of most things, but deep diving into a super optimized
	environment for performance in a language not originally designed for it was a new experience. I
	learned a new way of thinking about allocations and data in general.
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
