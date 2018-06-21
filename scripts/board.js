import * as BoardActions from './board_actions';
import Cell from './cell';

class Board {
  constructor(rules) {
    this.rows = 70;
    this.cols = 100;
    this.grid = [];
    this.createBoard();
    this.rules = rules;
  }

  getEvent(eventName, targetCell) {
    switch(eventName) {
      case "#add-row":
        return BoardActions.addRow(targetCell, this);
      case "#add-col":
        return BoardActions.addCol(targetCell, this);
      case "#glider":
        return BoardActions.addShape(BoardActions.GliderPos, targetCell, this);
      case "#gun":
        return BoardActions.addShape(BoardActions.GunPos, targetCell, this);
      case "#spaceship":
        return BoardActions.addShape(BoardActions.SpacePos, targetCell, this);
      default:
        return;
    }
  }

  createBoard() {
    const gameBoard = document.querySelector('.game-board');

    for (let i = 0; i < this.rows; i++) {
      const newUl = document.createElement("ul");
      const row = [];
      for (let j = 0; j < this.cols; j++) {
        const newLi = document.createElement("li");
        newLi.classList.add('cell');
        newLi.id = `${i},${j}`;
        newUl.appendChild(newLi);

        const cell = new Cell(i, j);
        row.push(cell);
      }
      this.grid.push(row);
      gameBoard.appendChild(newUl);
    }
  }

  randomClusters() {
    let numCenterCells = Math.floor((Math.random() * 25) + 25);
    let centerCells = [], clusterCells = [];
    let minDis = 20, maxDis = 10;

    for (let i = 0; i < numCenterCells; i++) {
      let x = Math.floor(Math.random() * 70);
      let y = Math.floor(Math.random() * 100);
      let validCell = true;

      for (let j = 0; j < centerCells.length; j++) {
        let xDiff = Math.abs(centerCells[j].row - x) <= minDis;
        let yDiff = Math.abs(centerCells[j].col - y) <= minDis;
        if(xDiff && yDiff){
          validCell = false;
          break;
        }
      }

      if(validCell) {
        let centerCell = this.grid[x][y];
        centerCells.push(centerCell);
        let numClusterCells = Math.floor((Math.random() * 10) + 20);
        for (let k = 0; k < numClusterCells ; k++) {
          let a = Math.floor((Math.random() * 10) + 1) * (Math.random() < 0.5 ? -1 : 1);
          let b = Math.floor((Math.random() * 10) + 1) * (Math.random() < 0.5 ? -1 : 1);

          let newX = (centerCell.row + a) % this.rows;
          newX = newX < 0 ? newX + this.rows : newX;

          let newY = (centerCell.col + b) % this.cols;
          newY = newY < 0 ? newY + this.cols : newY;

          clusterCells.push(this.grid[newX][newY]);
        }
      }
    }

    const randomCells = centerCells.concat(clusterCells);

    randomCells.forEach(cell => {
      let newState = 1;
      if(this.rules === 'brightlife') newState += Math.floor((Math.random() * 6) + 1);
      this.grid[cell.row][cell.col].state = newState;
      let currentCell = document.getElementById(`${cell.row},${cell.col}`);
      cell.updateClass(currentCell);
    });

    return randomCells;

  }

  getStates() {
    const allStates = [];
    this.grid.forEach( (row) => {
      let rowOfStates = [];
      row.forEach((cell) => { rowOfStates.push(cell.state); });
      allStates.push(rowOfStates);
    });
    return allStates;
  }

  setStates(cells, state) {
    cells.forEach(cell => { cell.state = state; });
  }

  updateBoard() {
    let oldGrid = this.getStates();

    this.grid.forEach( (row, i) => {
      row.forEach( (cell, j) => {
        cell.updateState(oldGrid, this.rows, this.cols, this.rules);

        if(cell.state !== oldGrid[i][j]) {
          let currentCell = document.getElementById(`${cell.row},${cell.col}`);
          cell.updateClass(currentCell);
        }
      });
    });
  }

  clearBoard() {
    this.grid.forEach(row => { this.setStates(row, 0); });

    document.querySelectorAll('.alive').forEach(cell => {
      cell.classList.remove('alive');
    });

  }
}

export default Board;
