export default class GameView {

    constructor(){
        console.log("Game view");
    }

    updateBoard(game){ 
        console.log("this is ");
        console.log(game.board);
        for(let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index='${i}']`); 

            title.classList.remove('title-winner');

            let tileType = game.board[i] =='X' ? "title-x" : "title-o"

            title.innerHTML = `<span class="${titleType}">${game.board[i] ? game.board[i] : ""}</span>`

           if(winningCombination &&
            winningCombination.includes(i)){
                title.classList.add("title-winning")
            }
        }
    }
}