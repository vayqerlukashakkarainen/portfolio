export type Category = 'wacky' | 'inProgress' | 'apps' | 'boringWebsites';

interface Resource {
	text: string;
	icon: string;
	url: string;
}

interface ProjectPageContent {
	description: string;
	appRes?: Resource[];
	devRes?: Resource[];
	externalRes?: Resource[];
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
	pageContent?: ProjectPageContent;
}

export function extractProjectImages(slug: string) {
	const files = import.meta.glob(`/static/images/smam/*`, { as: 'url' });
	return Object.values(files);
}
export function removeStaticDir(url: string) {
	return url.replace('/static', '');
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
		category: 'apps',
		url: 'projects/',
		website: 'https://vayqerlukashakkarainen.github.io/showmeamovie/',
		slug: 'smam',
		pageContent: {
			description:
				'A fun little mobile app for randomizing movies or series to watch. Utilizing TMDb (The movie database) API and JustWatch API.',
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
			externalRes: [
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
		category: 'inProgress',
		url: 'https://vayqerlukashakkarainen.github.io/waycay-site/',
		isExternalUrl: true,
		slug: 'waycay-ai'
	},
	{
		title: 'Vayqer',
		description: 'Travel and discover Sweden',
		icon: 'movie',
		category: 'apps',
		url: 'projects/',
		slug: 'vayqer'
	}
];
