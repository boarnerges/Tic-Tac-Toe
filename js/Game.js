export default class Game {

    constructor(){
        console.log("init game");
        this.turn = "X";
        this.board =  new Array(9).fill(null)
        
    }
// [null, null, null, null, null, null, null, null, null]
// this is to intilize the game
    
    nextTurn(){
        if(this.turn == "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    }

// A contructor function helps initialize the Game
// // this is using Object oriented programming 
// we exported this function to main.js 

    makeMove(i){

        if(this.board[i]) {
            return;
        }
         this.board[i] = this.turn; // X or O
         let winningCombination = this.findWinningCombinations();
         if(!winningCombination)
    }

    findWinningCombinations(){
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]
        
        for(const combination of winningCombinations){
            const [a,b,c] = combination;
            if (this.board[a] &&
           (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
            return combination;
           }
           
        }
    }




}