import { Board } from './board.js';

const gameBoard = new Board("XO-game");
gameBoard.createBoard();
const playagainBTN = document.getElementById("playAgain")
playagainBTN.addEventListener("click", () => {
    gameBoard.element.innerHTML = "";
    gameBoard.turn = 0;
    gameBoard.gameOver = false;
    gameBoard.isCreated = false;
    gameBoard.createBoard();
})