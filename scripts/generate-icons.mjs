#!/usr/bin/env node
// Build-time script: extract only used icons from full collections into a static file.
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const mdiNames = [
	'arrow-left',
	'github',
	'linkedin',
	'open-in-new',
	'trophy',
	'docker',
	'image-edit',
	'language-javascript',
	'mapbox',
	'microsoft-xbox-controller',
	'television-play',
	'unity',
	'wordpress'
];

const simpleNames = [
	'apachecordova',
	'blender',
	'csharp',
	'klarna',
	'kotlin',
	'maplibre',
	'microsoftazure',
	'openstreetmap',
	'php',
	'svelte',
	'swift',
	'themoviedatabase',
	'threedotjs',
	'woocommerce'
];

function pickIcons(collection, names) {
	const icons = {};
	for (const name of names) {
		if (collection.icons[name]) {
			icons[name] = collection.icons[name];
		} else {
			console.warn(`⚠ Icon not found: ${collection.prefix}:${name}`);
		}
	}
	return { ...collection, icons, aliases: {} };
}

const mdiData = require('@iconify-json/mdi/icons.json');
const simpleData = require('@iconify-json/simple-icons/icons.json');

const result = {
	mdi: pickIcons(mdiData, mdiNames),
	simpleIcons: pickIcons(simpleData, simpleNames)
};

const outPath = resolve(dirname(fileURLToPath(import.meta.url)), '../src/lib/icons-data.json');
writeFileSync(outPath, JSON.stringify(result));

console.log(`✓ Generated icons-data.json`);
console.log(`  MDI: ${Object.keys(result.mdi.icons).length} icons`);
console.log(`  Simple Icons: ${Object.keys(result.simpleIcons.icons).length} icons`);
