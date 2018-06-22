import Board from './board';

class Game {
  constructor(){
    this.currentEvent = null;
    this.speed = document.getElementById('speed').value;
    this.domBoard = document.getElementById('board');

    let rules = document.getElementById('rules').value;
    this.board = new Board(rules);
  }

  changeRules(newRule) {
    this.board.rules = newRule;
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
    return this.board.randomClusters();
  }

  setEvent(eventName) {
    this.domBoard.classList.add('active');
    this.domBoard.removeEventListener('click', this.currentEvent);
    this.currentEvent = (e) => this.board.getEvent(eventName, e.target);
    this.domBoard.addEventListener('click', this.currentEvent);
  }

}

export default Game;
