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
     * Collision flag.
     * _true_ if the snake has collided with a wall or itself, _false_ otherwise.
     * 
     * @type {boolean}
     */
    collided;
    /**
     * The number of bits the snake has left to grow.
     * This number is set to GROW_AMOUNT when the snake eats an apple. As the
     * snake moves (and therefore grows), this value is decremented.
     * 
     * @type {number}
     */
    bitsToGrow;

    constructor() {
        // this.bits = [getLocation(10, 10), getLocation(11, 10), getLocation(12, 10), getLocation(13,10)];
        this.bits = [{ x: 10, y: 10 }, { x: 11, y: 10 }, { x: 12, y: 10 }, { x: 13, y: 10 }]
        this.collided = false;
        this.bitsToGrow = 0;
    }

    move() {
        if (this.bitsToGrow == 0)
            this.bits.pop();
        else
            this.bitsToGrow--;

        let direction = getDirection()
        let { x, y } = this.bits[0];
        /*
         if (direction == Direction.UP) {
            this.bits.unshift(new Location(head.x, head.y - BLOCK_SIZE));
        } else if (direction == Direction.DOWN) {
            this.bits.unshift(new Location(head.x, head.y + BLOCK_SIZE));
        } else if (direction == Direction.LEFT) {
            this.bits.unshift(new Location(head.x - BLOCK_SIZE, head.y));
        } else {
            this.bits.unshift(new Location(head.x + BLOCK_SIZE, head.y));
        }
        */
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

