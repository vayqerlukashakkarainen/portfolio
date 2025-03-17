export interface Image {
	url: string;
	caption?: string;
}

export const images: Image[] = [
	{
		url: 'cute1.JPG',
		caption: 'Adventure time'
	},
	{
		url: 'cute2.JPG'
	},
	{
		url: 'cute3.JPG'
	}
];

const usedImages: Image[] = [];

export function getRandomImage(index: number) {
	const rnd = Math.floor(Math.random() * images.length);
	const img = images[rnd];

	if (index >= usedImages.length) {
		usedImages.push(img);
	} else {
		usedImages[index] = img;
	}

	return usedImages[index];
}

export function allImagesSame() {
	if (usedImages.length === 0) return false;
	const url = usedImages[0].url;
	const allAreSame = usedImages.every((x) => x.url === url);
	return allAreSame;
}
