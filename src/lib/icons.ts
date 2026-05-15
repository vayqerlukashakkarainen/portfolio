import { addCollection } from '@iconify/svelte';
import iconsData from './icons-data.json';

export function preloadIcons() {
	addCollection(iconsData.mdi as Parameters<typeof addCollection>[0]);
	addCollection(iconsData.simpleIcons as Parameters<typeof addCollection>[0]);
}
