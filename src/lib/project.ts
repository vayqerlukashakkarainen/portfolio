import type { ComponentType, SvelteComponent } from 'svelte';
import Smam from '../components/projects/Smam.svelte';
import Vayqer from '../components/projects/Vayqer.svelte';
import LuMonne from '../components/projects/LuMonne.svelte';
import UnityDots from '../components/projects/UnityDots.svelte';
import Cartopia from '../components/projects/Cartopia.svelte';
import ScrollSite from '../components/projects/ScrollSite.svelte';
import Environment from '../components/projects/Environment.svelte';
import TwodLandz from '../components/projects/2dlandz.svelte';

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
	appUrl?: string;
	isExternalUrl?: boolean;
	slug: string;
	date: number;
	bgImg?: string;
	wip?: boolean;
	pageContent?: ProjectPageContent;
}

let imgs: string[] = [];
export async function extractImages() {
	const files = import.meta.glob(`/static/images/**/*`, { query: '?url', import: 'default' });
	imgs = Object.keys(files);
}

export function anyMediaInProject(slug: string) {
	const media = imgs.filter((i) => i.includes(slug));
	const anyVideo = media.some((x) => isVideo(x));

	return { anyMedia: media.length > 0, anyVideo };
}

export function extractProjectImages(slug: string, amount: number) {
	const filtered = imgs.filter((i) => i.includes(slug));

	const arr: string[] = [];

	for (let i = 0; i < amount; i++) {
		const rnd = Math.floor(Math.random() * filtered.length);
		arr.push(filtered[rnd]);
	}

	return arr;
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
		appUrl: 'https://smam.luhakk.com/',
		slug: 'smam',
		bgImg: 'images/smam/2img2.png',
		pageContent: {
			description: Smam,
			devRes: [
				{
					text: 'Cordova',
					url: 'https://cordova.apache.org/',
					icon: 'simple-icons:apachecordova'
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
		bgImg: 'images/waycay/img1.png',
		slug: 'waycay-ai'
	},
	{
		title: 'Vayqer',
		description: 'Roadtrip platform to travel and discover Sweden',
		icon: 'movie',
		date: 2021,
		category: 'apps',
		url: 'projects/',
		slug: 'vayqer',
		bgImg: 'images/vayqer/img3.png',
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
		bgImg: 'images/lu-monne/lumonne3.png',
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
		title: 'SpaceDaze',
		description: '1-bit style arcade space-shooter game',
		icon: '',
		date: 2025,
		category: 'wacky',
		url: 'https://spacedaze.luhakk.com',
		isExternalUrl: true,
		bgImg: 'images/spacedaze/video1.mp4',
		slug: 'space-daze'
	},
	{
		title: 'Behaviour Trees in DOTS',
		description: 'BT implementation in Unity`s Data-Oriented Technology Stack',
		icon: '',
		date: 2023,
		category: 'wacky',
		url: 'projects/',
		isExternalUrl: false,
		slug: 'bt-dots',
		bgImg: 'images/unity-bt/img1.png',
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
		bgImg: 'images/cartopia/video1.mp4',
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
		title: '2DLandz',
		description: 'Fast-paced knockout platformer',
		icon: '',
		date: 2013,
		category: 'wacky',
		wip: false,
		url: 'projects/',
		isExternalUrl: false,
		slug: '2d-landz',
		bgImg: 'images/2d-landz/video1.mp4',
		pageContent: {
			description: TwodLandz,
			devRes: [
				{
					text: 'XNA',
					icon: 'mdi:microsoft-xbox-controller',
					url: 'https://fna-xna.github.io/'
				},
				{
					text: 'C#',
					icon: 'devicon-plain:csharp',
					url: 'https://learn.microsoft.com/sv-se/dotnet/csharp/'
				}
			]
		}
	},
	{
		title: 'Environment generator',
		description: 'Terrain and nature generator in Unity',
		icon: '',
		date: 2023,
		category: 'wacky',
		url: 'projects/',
		isExternalUrl: false,
		slug: 'unity-environment',
		bgImg: 'images/unity-environment/img2.png',
		pageContent: {
			description: Environment,
			devRes: [
				{
					text: 'Unity',
					icon: 'mdi:unity',
					url: 'https://unity.com/'
				},
				{
					text: 'Blender',
					icon: 'simple-icons:blender',
					url: 'https://blender.org/'
				}
			]
		}
	},
	{
		title: 'AI code reviewer',
		description: 'Attach an AI with rules to review GH pull requests',
		icon: '',
		date: 2025,
		category: 'apps',
		url: 'https://github.com/vayqerlukashakkarainen/gpt-reviewer',
		isExternalUrl: true,
		slug: 'gpt-reviewer',
		bgImg: 'images/gpt-reviewer/img1.png'
	},
	{
		title: 'ncompat',
		description: 'Scan package.json against node compatibility',
		icon: '',
		date: 2025,
		category: 'apps',
		url: 'https://github.com/vayqerlukashakkarainen/ncompat',
		isExternalUrl: true,
		slug: 'ncompat',
		bgImg: 'images/ncompat/img1.png'
	}
];
