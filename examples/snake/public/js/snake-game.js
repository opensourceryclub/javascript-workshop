import { Board } from "./board.js";

const board = new Board()
/** Update and draw rate for the game, in updates per second */
const FRAMERATE = 100;

let intervalId = setInterval(() => {
    run
}, FRAMERATE)

/**
 * Reset the board and start the game
 */
let reset = () => {
    board.reset()
    intervalId = setInterval(() => {
        run()
    }, FRAMERATE)
}

/**
 * Update the board every tick while the game is running
 */
let run = () => {
    board.update();
    if (!board.snake.isAlive) {
        clearInterval(intervalId)
    }
}

// Make reset() run when the user clicks the 'start/reset' button.
document.getElementById("reset-button").addEventListener("click", reset);