import Board from './board';

class Game {
  constructor(){
    this.board = new Board;
    this.speed = 300;

  }

  start(){
    this.board.randomClusters();
    this.board.randomClusters();
    this.board.randomClusters();
    this.play();
  }

  play() {
    if(!this.playInterval) {
      this.playInterval = setInterval(() =>{
        this.board.updateBoard();
      }, this.speed);
    }
  }

  pause() {
    if(this.playInterval) {
      clearInterval(this.playInterval);
      this.playInterval = null;
    }
  }

  clearBoard() {
    this.board.clearBoard();
  }

  randomSeeds() {
    this.board.randomClusters();
  }

}

export default Game;
