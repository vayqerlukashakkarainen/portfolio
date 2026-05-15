export function stagger(node: HTMLElement): void {
	const all = Array.from(document.querySelectorAll('[data-stagger]'));
	const index = all.indexOf(node);

	node.style.opacity = '0';
	node.style.transition = `opacity 200ms ease ${index * 80}ms`;

	requestAnimationFrame(() => {
		node.style.opacity = '1';
	});
}
