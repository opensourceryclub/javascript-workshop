// @ts-check

import { getDirection, Direction } from "./keyboard.js";

/**
 * Represents the player's snake on the game board.
 */
export class Snake {
    /**
     * The number of bits the snake should grow when it eats an apple
     * 
     * @type {number}
     */
    static GROW_AMOUNT = 3;
    /**
     * The blocks that make up the snake's body.
     * 
     * @type { {x: number, y: number}[] }
     */
    bits;
    /**
     * The number of bits the snake has left to grow.
     * This number is set to GROW_AMOUNT when the snake eats an apple. As the
     * snake moves (and therefore grows), this value is decremented.
     * 
     * @type {number}
     */
    bitsToGrow;
    /**
     * Life status of the snake.
     * __true__ if the snake is alive, __false__ if it's dead.
     * 
     * @type {boolean}
     */
    isAlive;

    constructor() {
        this.reset()
    }

    /**
     * Sets the snake's properties to their initial state.
     */
    reset() {
        this.bits = [
            { x: 10, y: 10 },
            { x: 11, y: 10 }, 
            { x: 12, y: 10 },
            { x: 13, y: 10 }
        ];
        this.bitsToGrow = 0;
        this.isAlive = true;
    }

    /**
     * Update the snake's position, growing the snake if necessary.
     */
    move() {
        if (!this.isAlive)
            return;
        
        let direction = getDirection()
        let { x, y } = this.bits[0];

        if (this.bitsToGrow == 0)
            this.bits.pop();
        else
            this.bitsToGrow--;

        if (direction == Direction.UP) {
            this.bits.unshift({ x, y: y - 1 });
        } else if (direction == Direction.DOWN) {
            this.bits.unshift({ x, y: y + 1 });
        } else if (direction == Direction.LEFT) {
            this.bits.unshift({ x: x - 1, y });
        } else {
            this.bits.unshift({ x: x + 1, y });
        }
    }
}

