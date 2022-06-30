import Game from "./Game.js"
import GameView from './GameView.js'

let game = new Game();
let gameView = new GameView(); //initializing Gameview constructor 

document.querySelector(".restart")
 .addEventListener("clcik", () => {
    onRestartClick();
} )

let tiles = document.querySelectorAll(".board-tile")
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    game.makeMove(i);
    gameView.updateBoard(game);
    
}

function onRestartClick(){
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);