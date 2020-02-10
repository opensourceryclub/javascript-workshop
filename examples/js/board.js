import { Snake } from "./snake.js";

export class Board {

  width;
  height;
  _ctx;
  snake;
  inPlay;

  constructor() {
    const canvas  = document.getElementById('snake-canvas');
    this._ctx     = canvas.getContext('2d');
    this.width    = canvas.width;
    this.height   = canvas.height;
    this.snake    = new Snake();
    this.inPlay = true;
  }
  
  refresh() {
    this._ctx.strokeStyle = "#FF0000";
    this._ctx.clearRect(0, 0, this.width, this.height);
    this.snake.move()
    this.snake.drawCells(this._ctx);
    if (this.snake.checkCollision(this.width, this.height)) {
      // gameover
      console.log("GAMEOVER")
      this.inPlay = false;
    }
  }

  drawCell(...cells) {
  }
}

export const BLOCK_SIZE = 25;

export function getLocation(row, col) {
  return new Location(col * BLOCK_SIZE, row * BLOCK_SIZE)
}

/* a simple class holding x and y for location on the canvas*/
export class Location {
  x;
  y;
  constructor(x, y) {
      this.x = x
      this.y = y
  }
}