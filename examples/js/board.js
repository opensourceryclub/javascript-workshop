
class Board {

  static BLOCK_SIZE = 25;
  width;
  height;
  _ctx;

  constructor() {
    const canvas  = document.getElementById('snake-canvas');
    this._ctx     = canvas.getContext('2d');
    this.width    = canvas.width;
    this.height   = canvas.height;
  }

  refresh() {
    this._ctx.clearRect(0, 0, this.width, this.height);
  }

  drawCell(...cells) {

  }
}

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
