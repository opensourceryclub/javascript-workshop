// @ts-check 
import { Snake } from "./snake.js";

export class Board {
  /**
   * Number of pixels in a game board unit.
   * 
   * For example, if a block is 1x1 in game board units, the same block is
   * 25x25 in screen coordinates.
   */
  static BLOCK_SIZE = 25;
  /**
   * Width of the canvas in pixels.
   * 
   * @type {number}
   */
  width;
  /**
   * Height of the canvas in pixels.
   * 
   * @type {number}
   */
  height;
  /**
   * The canvas' drawing context, used for drawing stuff on the canvas.
   * 
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
   * @type {CanvasRenderingContext2D}
   */
  _ctx;
  /**
   * The player's snake instance.
   * 
   * @type {Snake}
   */
  snake;
  /**
   * The apple's location, in grid coordinates
   * @type { {x: number, y: number} }
   */
  apple;

  constructor() {
    const canvas = document.getElementById('snake-canvas');
    if (!(canvas instanceof HTMLCanvasElement))
      throw new Error('element with id "snake-canvas" must be a canvas element.')

    this._ctx     = canvas.getContext('2d');
    this.width    = canvas.width;
    this.height   = canvas.height;
    this.snake    = new Snake();
    this.setApple();
  }

  update() {
    // Move the snake
    this.snake.move()
    this.checkAppleCollision()

    this.snake.isAlive = !this.checkSnakeCollision();
    this.draw()
  }

  draw() {
    // clear the game board
    this._ctx.strokeStyle = "#FF0000";
    this._ctx.clearRect(0, 0, this.width, this.height);

    // draw snake
    this.snake.bits.forEach(bit => {
      let { x, y, width, height } = Board.toPixels(bit);
      this._ctx.strokeRect(x, y, width, height);
    });

    // draw apple 
    let { x, y, width, height } = Board.toPixels(this.apple);
    this._ctx.fillRect(x, y, width, height);

    if (!this.snake.isAlive) {
      this._ctx.fillText("Game Over", 100, 100)
    }

  }

  setApple() {
    do {
      this.apple = {
        x: Math.trunc(Math.random() * 20),
        y: Math.trunc(Math.random() * 20)
      }
    } while (this.snake.bits.includes(this.apple));
  }

  checkAppleCollision() {
    if (this.snake.bits[0].x == this.apple.x && this.snake.bits[0].y == this.apple.y) {
      console.log("CHECKED")
      this.snake.bitsToGrow += Snake.GROW_AMOUNT;
      this.setApple()
    }
  }

  checkSnakeCollision() {
    if (!this.snake.isAlive)
      return true;

    let { bits } = this.snake;
    let { x, y } = bits[0];

    for (let bit of bits.slice(1))
      if ( bit.x === x && bit.y == y)
        return true;
   
    ({ x, y } = Board.toPixels({ x, y }));

    return x < 0 || x > this.width || y < 0 || y > this.height
  }

  reset() {
    this.setApple()
    this.snake.reset();
  }

  /**
   * Converts an object containing {x, y, width, height} properties in
   * game board space to the same coordinates in screen space.
   * 
   * If no x or y are provided, they default to 0.
   * If no width or height are provided, they default to 1.
   * 
   */
  static toPixels(obj = {}) {
    let {
      x = 0,
      y = 0,
      width = 1,
      height = 1
    } = obj
    let { BLOCK_SIZE } = Board;

    return {
      x: x * BLOCK_SIZE,
      y: y * BLOCK_SIZE,
      width: width * BLOCK_SIZE,
      height: height * BLOCK_SIZE
    }
  }
}

