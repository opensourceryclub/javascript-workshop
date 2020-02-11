import { Snake } from "./snake.js";

export class Board {

  width;
  height;
  _ctx;
  snake;
  apple;
  inPlay;

  constructor() {
    const canvas  = document.getElementById('snake-canvas');
    this._ctx     = canvas.getContext('2d');
    this.width    = canvas.width;
    this.height   = canvas.height;
    this.snake    = new Snake();
    this.setApple();
    this.inPlay = true;
  }
  
  refresh() {
    this._ctx.strokeStyle = "#FF0000";
    this._ctx.clearRect(0, 0, this.width, this.height);
    this.snake.move()
    this.checkAppleCollision()
    this.draw()
    if (this.snake.checkCollision(this.width, this.height)) {
      // gameover
      this._ctx.fillText("Game Over", 100, 100)
      this.inPlay = false;
    }
  }

  draw() {
    // draw snake
    this.snake.bits.forEach(bit => {
      this._ctx.strokeRect(bit.x, bit.y, BLOCK_SIZE, BLOCK_SIZE);
    });

    // draw apple 
    this._ctx.fillRect(this.apple.x, this.apple.y, BLOCK_SIZE, BLOCK_SIZE);

  }


  setApple() {
    do {
      this.apple = getLocation(Math.trunc(Math.random() * 20), Math.trunc(Math.random() * 20))
    } while (this.snake.bits.includes(this.apple));
  }

  checkAppleCollision() {
    if (this.snake.bits[0].x == this.apple.x && this.snake.bits[0].y == this.apple.y) {
      console.log("CHECKED")
      this.snake.bitsToGrow += 3;
      this.setApple()
    }
  }

  reset() {
    this.setApple()
    this.snake  = new Snake();
    this.inPlay = true;
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