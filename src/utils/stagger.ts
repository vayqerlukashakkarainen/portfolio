import { tick } from 'svelte';

export function stagger(node: HTMLElement): void {
	node.style.opacity = '0';

	(async () => {
		await tick();
		const scope = node.closest('[data-stagger-scope]') ?? document;
		const all = Array.from(scope.querySelectorAll('[data-stagger]'));
		const index = all.indexOf(node);
		node.style.transition = `opacity 200ms ease ${index * 80}ms`;
		node.style.opacity = '1';
	})();
}
