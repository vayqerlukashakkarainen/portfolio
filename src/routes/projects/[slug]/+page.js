import { error } from '@sveltejs/kit';
import { projects } from '$lib/project';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const project = projects.find((x) => x.slug === params.slug);
	if (project) {
		return project;
	}

	error(404, 'Not found');
}
