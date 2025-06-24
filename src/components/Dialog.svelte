<script lang="ts">
	import { parseDialogContent } from '$lib/dialog';
	import { onMount } from 'svelte';

	export let text = '';
	let currentDialogContent = '';
	let contentLoaded = false;

	onMount(() => {
		parseDialog();
	});

	function parseDialog() {
		currentDialogContent = '';
		const chunks = parseDialogContent(text);

		contentLoaded = false;
		let previousDelta = 0;
		let start: number | undefined;
		let waited = 0;
		let currentChunk = 0;
		let charIndex = 0;
		let waitedSpeed = 0;
		function update(time: number) {
			if (start === undefined) {
				start = time;
			}

			const elapsed = time - start;
			const deltaTime = (elapsed - previousDelta) / 1000;

			waited += 60 * deltaTime;

			if (waited >= chunks[currentChunk].wait) {
				waitedSpeed += 100 * deltaTime;

				if (waitedSpeed >= chunks[currentChunk].speed) {
					currentDialogContent += chunks[currentChunk].content[charIndex];
					waitedSpeed = 0;
					charIndex++;
				}

				if (charIndex >= chunks[currentChunk].content.length) {
					charIndex = 0;
					waited = 0;
					currentChunk++;

					if (currentChunk >= chunks.length) {
						contentLoaded = true;
						return;
					}
				}
			}

			previousDelta = elapsed;
			requestAnimationFrame(update);
		}
		window.requestAnimationFrame(update);
	}
</script>

<span>{currentDialogContent}</span>
