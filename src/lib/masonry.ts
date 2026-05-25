interface MasonryOptions {
	columns?: number
	gap?: number
	onReady?: () => void
}

const MOVE_DURATION = 550;

export function masonry(node: HTMLElement, options: MasonryOptions = {}) {
	let { columns = 3, gap = 12, onReady } = options
	let readyFired = false;

	// Saved snapshot of positions taken BEFORE the filter changes
	let savedSnapshot: Map<Element, { left: number; top: number }> | null = null;

	// ── Phase A: measure natural heights without disturbing positions ──────────
	function measureHeights(): Map<HTMLElement, number> {
		const items = Array.from(node.children) as HTMLElement[];
		const w = `calc((100% - ${gap * (columns - 1)}px) / ${columns})`;

		// Apply target width so height reflects the correct column width,
		// but do NOT touch left/top — cards stay where they are visually
		items.forEach((item) => {
			item.style.width = w;
			item.style.position = 'absolute';
		});

		void node.offsetHeight; // reflow to get accurate heights at the new width

		const map = new Map<HTMLElement, number>();
		items.forEach((item) => map.set(item, item.offsetHeight));
		return map;
	}

	// ── Phase B: compute target positions from measured heights ───────────────
	function computePlacements(heights: Map<HTMLElement, number>) {
		const items = Array.from(node.children) as HTMLElement[];
		const w = `calc((100% - ${gap * (columns - 1)}px) / ${columns})`;
		const colHeights = Array(columns).fill(0) as number[];

		return items.map((item) => {
			const col = colHeights.indexOf(Math.min(...colHeights));
			const x = col * (item.offsetWidth + gap);
			const y = colHeights[col];
			colHeights[col] += (heights.get(item) ?? item.offsetHeight) + gap;
			return { item, x, y, w };
		});
	}

	// ── Plain layout (no animation) — resize / image load ────────────────────
	function layout() {
		const heights = measureHeights();
		const placements = computePlacements(heights);

		placements.forEach(({ item, x, y, w }) => {
			item.style.width = w;
			item.style.left = `${x}px`;
			item.style.top = `${y}px`;
		});

		const maxBottom = Math.max(...placements.map(({ item, y }) => y + item.offsetHeight), 0);
		node.style.position = 'relative';
		node.style.height = `${maxBottom}px`;

		// Second pass to catch late image loads shifting heights
		requestAnimationFrame(() => {
			const h2 = measureHeights();
			const p2 = computePlacements(h2);
			p2.forEach(({ item, x, y, w }) => {
				item.style.width = w;
				item.style.left = `${x}px`;
				item.style.top = `${y}px`;
			});
			const mb2 = Math.max(...p2.map(({ item, y }) => y + item.offsetHeight), 0);
			node.style.height = `${mb2}px`;

			if (!readyFired) {
				readyFired = true;
				onReady?.();
			}
		});
	}

	// ── Animated shuffle layout — filter change ───────────────────────────────
	function shuffleLayout() {
		const oldPositions =
			savedSnapshot ??
			new Map(
				Array.from(node.children).map((el) => [
					el,
					{ left: (el as HTMLElement).offsetLeft, top: (el as HTMLElement).offsetTop }
				])
			);
		savedSnapshot = null;

		// Phase A: measure heights without moving anything
		const heights = measureHeights();

		// Phase B: compute where everything should go
		const placements = computePlacements(heights);

		const maxBottom = Math.max(...placements.map(({ item, y }) => y + item.offsetHeight), 0);

		placements.forEach(({ item, x, y, w }) => {
			item.style.width = w;

			if (oldPositions.has(item)) {
				item.style.left = `${x}px`;
				item.style.top = `${y}px`;
			} else {
				// New card — suppress transition, set hidden state, then animate in
				item.style.transition = 'none';
				item.style.left = `${x}px`;
				item.style.top = `${y}px`;
				item.style.opacity = '0';
				item.style.transform = 'scale(0.85)';
				void item.offsetHeight; // commit hidden state before re-enabling transition
				item.style.transition = '';

				setTimeout(() => {
					item.style.opacity = '1';
					item.style.transform = 'scale(1)';
				}, MOVE_DURATION * 0.6);
			}
		});

		// Animate container height change too
		node.style.height = `${maxBottom}px`;
	}

	// ── Snapshot — call BEFORE changing filter ────────────────────────────────
	function snapshot() {
		savedSnapshot = new Map(
			Array.from(node.children).map((el) => [
				el,
				{ left: (el as HTMLElement).offsetLeft, top: (el as HTMLElement).offsetTop }
			])
		);
	}

	let rafId: number;
	function scheduleLayout() {
		cancelAnimationFrame(rafId);
		rafId = requestAnimationFrame(layout);
	}

	scheduleLayout();

	const ro = new ResizeObserver(scheduleLayout);
	ro.observe(node);

	function observeImages() {
		node.querySelectorAll('img').forEach((img) => {
			if (!(img as HTMLImageElement).complete) {
				img.addEventListener('load', scheduleLayout, { once: true });
				img.addEventListener('error', scheduleLayout, { once: true });
			}
		});
	}
	observeImages();

	const mo = new MutationObserver(() => {
		observeImages();
		scheduleLayout();
	});
	mo.observe(node, { childList: true, subtree: false });

	node.addEventListener('masonry:snapshot', snapshot);
	node.addEventListener('masonry:shuffle', shuffleLayout as EventListener);
	node.addEventListener('masonry:refresh', scheduleLayout);

	return {
		update(newOptions: MasonryOptions) {
			columns = newOptions.columns ?? 3
			gap = newOptions.gap ?? 12
			onReady = newOptions.onReady
			scheduleLayout()
		},
		destroy() {
			cancelAnimationFrame(rafId);
			ro.disconnect();
			mo.disconnect();
			node.removeEventListener('masonry:snapshot', snapshot);
			node.removeEventListener('masonry:shuffle', shuffleLayout as EventListener);
			node.removeEventListener('masonry:refresh', scheduleLayout);
		}
	};
}
