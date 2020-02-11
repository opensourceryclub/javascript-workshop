import { Board } from "./board.js";

const board = new Board()
let intervalId = setInterval(() => {
    run
}, 100)

let reset = () => {
    board.reset()
    intervalId = setInterval(() => {
        run()
    }, 100)
}

let run = () => {
    board.refresh();
    if (!board.inPlay) {
        clearInterval(intervalId)
    }
}

document.getElementById("reset-button").addEventListener("click", reset);