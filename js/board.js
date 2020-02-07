export const BLOCK_SIZE = 25;

/* a function to convert row and column to a location object containing x and y in px */
export function getLocation(row, column) {
    return new Location(column * BLOCK_SIZE, row * BLOCK_SIZE)
}

/* a simple class holding x and y for location on the canvas*/
export class Location {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}