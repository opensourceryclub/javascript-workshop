import { Board } from "./board.js";

const board = new Board()
let intervalId = setInterval(() => {
    board.refresh();
    if (!board.inPlay) {
        clearInterval(intervalId)
    }
}, 100)

let refresh = () => {
    
}