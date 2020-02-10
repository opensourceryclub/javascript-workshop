import { Location, BLOCK_SIZE, getLocation } from "./board.js";
import { getDirection, Direction } from "./keyboard.js";

// a module repersenting a snake in our game

export class Snake {
    bits;
    collided;

    constructor() {
        this.bits = [getLocation(10, 10), getLocation(11, 10), getLocation(12, 10), getLocation(13,10)];
        this.collided = false;
    }

    move() {
        this.bits.pop();
        let direction = getDirection()
        let head = this.bits[0];
        if (direction == Direction.UP) {
            this.bits.unshift(new Location(head.x, head.y - BLOCK_SIZE));
        } else if (direction == Direction.DOWN) {
            this.bits.unshift(new Location(head.x, head.y + BLOCK_SIZE));
        } else if (direction == Direction.LEFT) {
            this.bits.unshift(new Location(head.x - BLOCK_SIZE, head.y));
        } else {
            this.bits.unshift(new Location(head.x + BLOCK_SIZE, head.y));
        }
    }

    checkCollision(boardWidth, boardHeight) {
        let head = this.bits[0];
        for (let i = 1; i < this.bits.length; i++)
            if (this.bits[i].x == head.x && this.bits[i].y == head.y)
                return true;
        return head.x < 0 || head.x > boardWidth || head.y < 0 || head.y > boardHeight
    }

    drawCells(_ctx) {
        this.bits.forEach(bit => {
            _ctx.strokeRect(bit.x, bit.y, BLOCK_SIZE, BLOCK_SIZE);
        });
    }
}

