export default class GameView {

    constructor(){
        console.log("Game view");
    }

    updateBoard(game){
        console.log("this is ");
        console.log(game.board);
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile
            [data-index='${i}']`); 
            tile.textContent = game.board(i);
        }
    }
}