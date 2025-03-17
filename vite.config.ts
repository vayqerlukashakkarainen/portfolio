import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default async () => {
	return defineConfig({
		plugins: [sveltekit()]
	});
};
