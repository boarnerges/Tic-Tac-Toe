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
    }




}