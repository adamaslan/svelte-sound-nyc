const prefersReducedMotion = () =>
	typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fades/slides an element in the first time it scrolls into view. */
export function reveal(node, { delay = 0 } = {}) {
	if (prefersReducedMotion() || !('IntersectionObserver' in window)) return {};

	node.classList.add('reveal');
	node.style.transitionDelay = `${delay}ms`;
	const observer = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			node.classList.add('reveal-in');
			observer.disconnect();
		},
		{ threshold: 0.15 }
	);
	observer.observe(node);
	return { destroy: () => observer.disconnect() };
}

/** Shifts an element vertically at `speed` x the scroll offset for a parallax feel. */
export function parallax(node, speed = 0.15) {
	if (prefersReducedMotion()) return {};

	let frame = 0;
	const update = () => {
		frame = 0;
		const rect = node.parentElement.getBoundingClientRect();
		const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
		node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.15)`;
	};
	const onScroll = () => {
		if (!frame) frame = requestAnimationFrame(update);
	};
	update();
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll);
	return {
		destroy() {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			cancelAnimationFrame(frame);
		}
	};
}
