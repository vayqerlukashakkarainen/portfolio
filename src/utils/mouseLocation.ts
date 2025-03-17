interface Location {
	x: number;
	y: number;
}

export let mouseLocation: Location;

export function setMouseLocation(x: number, y: number) {
	mouseLocation.x = x;
	mouseLocation.y = y;
}
