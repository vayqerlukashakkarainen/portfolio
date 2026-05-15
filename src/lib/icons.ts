import { addCollection } from '@iconify/svelte';
import mdi from '@iconify-json/mdi/icons.json';
import simpleIcons from '@iconify-json/simple-icons/icons.json';

export function preloadIcons() {
	addCollection(mdi as Parameters<typeof addCollection>[0]);
	addCollection(simpleIcons as Parameters<typeof addCollection>[0]);
}
