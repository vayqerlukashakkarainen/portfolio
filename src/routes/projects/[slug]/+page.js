import { error } from '@sveltejs/kit';
import { projects } from '$lib/project';

export const entries = () => {
	const slugs = projects.map((x) => ({ slug: x.slug }));
	return [...slugs];
};

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const project = projects.find((x) => x.slug === params.slug);
	if (project) {
		return project;
	}

	error(404, 'Not found');
}
