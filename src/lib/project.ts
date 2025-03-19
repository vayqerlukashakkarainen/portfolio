import type { ComponentType, SvelteComponent } from 'svelte';
import Smam from '../components/projects/Smam.svelte';
import Vayqer from '../components/projects/Vayqer.svelte';
import LuMonne from '../components/projects/LuMonne.svelte';
import UnityDots from '../components/projects/UnityDots.svelte';
import Cartopia from '../components/projects/Cartopia.svelte';
import ScrollSite from '../components/projects/ScrollSite.svelte';
import Environment from '../components/projects/Environment.svelte';

export type Category = 'wacky' | 'apps' | 'boringWebsites';

interface Resource {
	text: string;
	icon: string;
	url: string;
}

interface ProjectPageContent {
	description: ComponentType<SvelteComponent>;
	appRes?: Resource[];
	devRes?: Resource[];
	apiRes?: Resource[];
}

export interface Project {
	title: string;
	description: string;
	icon: string;
	category: Category;
	url: string;
	website?: string;
	isExternalUrl?: boolean;
	slug: string;
	date: number;
	wip?: boolean;
	pageContent?: ProjectPageContent;
}

const imgs: string[] = [];
export async function extractImages() {
	const files = import.meta.glob(`/static/images/**/*`, { query: '?url', import: 'default' });
	const v = Object.values(files);
	v.map(async (v) => {
		const c = (await v()) as string;
		imgs.push(c);
	});
}

export function extractProjectImages(slug: string) {
	return imgs.filter((i) => i.includes(slug));
}
export function removeStaticDir(url: string) {
	return url.replace('/static/', '');
}

export function isImage(src: string) {
	return /\.(png|jpe?g)$/i.test(src);
}

export function isVideo(src: string) {
	return /\.(mp4)$/i.test(src);
}

export const projects: Project[] = [
	{
		title: 'Show me a Movie',
		description: 'Movies and series randomizer',
		icon: 'movie',
		date: 2023,
		category: 'apps',
		url: 'projects/',
		website: 'https://vayqerlukashakkarainen.github.io/showmeamovie/',
		slug: 'smam',
		pageContent: {
			description: Smam,
			appRes: [
				{
					text: 'iOS App store',
					url: 'https://apps.apple.com/se/app/show-me-a-movie/id1610758365?l=en-GB',
					icon: 'simple-icons:appstore'
				},
				{
					text: 'Google play store',
					url: 'https://play.google.com/store/apps/details?id=io.vayqer.movieapp',
					icon: 'ion:logo-google-playstore'
				}
			],
			devRes: [
				{
					text: 'Framework7',
					url: 'https://framework7.io/',
					icon: 'simple-icons:framework7'
				}
			],
			apiRes: [
				{
					text: 'TMDb',
					url: 'https://framework7.io/',
					icon: 'simple-icons:themoviedatabase'
				},
				{
					text: 'JustWatch',
					url: 'https://www.justwatch.com/',
					icon: 'cbi:justwatch'
				}
			]
		}
	},
	{
		title: 'Waycay',
		description: 'Travel and discover Sweden through the power of AI',
		icon: 'movie',
		date: 2023,
		category: 'apps',
		wip: true,
		url: 'https://vayqerlukashakkarainen.github.io/waycay-site/',
		isExternalUrl: true,
		slug: 'waycay-ai'
	},
	{
		title: 'Vayqer',
		description: 'Travel and discover Sweden',
		icon: 'movie',
		date: 2021,
		category: 'apps',
		url: 'projects/',
		slug: 'vayqer',
		pageContent: {
			description: Vayqer,
			devRes: [
				{
					text: 'Microsoft Azure',
					icon: 'lineicons:azure',
					url: 'https://azure.microsoft.com/en-us/'
				},
				{
					text: 'C#',
					icon: 'devicon-plain:csharp',
					url: 'https://learn.microsoft.com/sv-se/dotnet/csharp/'
				},
				{
					text: 'Kotlin',
					icon: 'simple-icons:kotlin',
					url: 'https://kotlinlang.org/'
				},
				{
					text: 'Swift UI',
					icon: 'lineicons:swift',
					url: 'https://developer.apple.com/swift/'
				}
			],
			apiRes: [
				{
					text: 'Mapbox',
					icon: 'mdi:mapbox',
					url: 'https://www.mapbox.com/'
				},
				{
					text: 'Klarna',
					icon: 'simple-icons:klarna',
					url: 'https://www.klarna.com/'
				}
			]
		}
	},
	{
		title: 'WooCommerce site',
		description: 'Not deployed E-Commerce site',
		icon: '',
		date: 2023,
		category: 'boringWebsites',
		url: 'projects/',
		isExternalUrl: false,
		slug: 'lu-monne',
		pageContent: {
			description: LuMonne,
			devRes: [
				{
					text: 'PHP',
					icon: 'ri:php-fill',
					url: 'https://www.php.net/'
				},
				{
					text: 'Docker',
					icon: 'mdi:docker',
					url: 'https://www.docker.com/'
				},
				{
					text: 'WooCommerce',
					icon: 'devicon-plain:woocommerce',
					url: 'https://woocommerce.com/'
				},
				{
					text: 'Wordpress',
					icon: 'ic:baseline-wordpress',
					url: 'https://wordpress.org/'
				}
			]
		}
	},
	{
		title: 'Behaviour Trees in DOTS',
		description: 'BT implementation in Unity DOTS',
		icon: '',
		date: 2023,
		category: 'wacky',
		url: 'projects/',
		isExternalUrl: false,
		slug: 'bt-dots',
		pageContent: {
			description: UnityDots,
			devRes: [
				{
					text: 'Unity',
					icon: 'mdi:unity',
					url: 'https://unity.com/'
				}
			]
		}
	},
	{
		title: 'Wacky scroll site',
		description: 'Dynamic animation site based on page scroll',
		icon: '',
		date: 2024,
		category: 'wacky',
		wip: true,
		url: 'projects/',
		isExternalUrl: false,
		slug: 'scroll-page',
		pageContent: {
			description: ScrollSite,
			devRes: [
				{
					text: 'Svelte',
					icon: 'ri:svelte-fill',
					url: 'https://svelte.dev/'
				}
			]
		}
	},
	{
		title: 'Cartopia',
		description: 'World based settlement building game',
		icon: '',
		date: 2025,
		category: 'wacky',
		wip: true,
		url: 'projects/',
		isExternalUrl: false,
		slug: 'cartopia',
		pageContent: {
			description: Cartopia,
			devRes: [
				{
					text: 'Svelte',
					icon: 'ri:svelte-fill',
					url: 'https://svelte.dev/'
				},
				{
					text: 'ThreeJS',
					icon: 'tabler:brand-threejs',
					url: 'https://threejs.org/'
				},
				{
					text: 'Maplibre',
					icon: 'simple-icons:maplibre',
					url: 'https://maplibre.org/'
				}
			],
			apiRes: [
				{
					text: 'OpenStreetMap',
					icon: 'simple-icons:openstreetmap',
					url: 'https://www.openstreetmap.org/'
				}
			]
		}
	},
	{
		title: 'Environemnt generator',
		description: 'Terrain and nature generator in Unity',
		icon: '',
		date: 2023,
		category: 'wacky',
		url: 'projects/',
		isExternalUrl: false,
		slug: 'unity-environment',
		pageContent: {
			description: Environment,
			devRes: [
				{
					text: 'Unity',
					icon: 'mdi:unity',
					url: 'https://unity.com/'
				}
			]
		}
	}
];
