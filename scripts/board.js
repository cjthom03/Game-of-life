import * as BoardActions from './board_actions';
import Cell from './cell';

class Board {
  constructor() {
    this.rows = 70;
    this.cols = 100;
    this.grid = [];
    this.createBoard();
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
        newLi.setAttribute('data-pos', [i, j]);
        newUl.appendChild(newLi);

        const cell = new Cell(i, j);
        row.push(cell);
      }
      this.grid.push(row);
      gameBoard.appendChild(newUl);
    }
  }

  randomClusters() {
    let numCenterNodes = Math.floor((Math.random() * 25) + 25);
    let centerNodes = [], clusterNodes = [];
    let minDis = 20, maxDis = 10;

    for (let i = 0; i < numCenterNodes; i++) {
      let x = Math.floor(Math.random() * 70);
      let y = Math.floor(Math.random() * 100);
      let validNode = true;

      for (let j = 0; j < centerNodes.length; j++) {
        let xDiff = Math.abs(centerNodes[j].row - x) <= minDis;
        let yDiff = Math.abs(centerNodes[j].col - y) <= minDis;
        if(xDiff && yDiff){
          validNode = false;
          break;
        }
      }

      if(validNode) {
        let centerNode = this.grid[x][y];
        centerNodes.push(centerNode);
        let numClusterNodes = Math.floor((Math.random() * 10) + 20);
        for (let k = 0; k < numClusterNodes ; k++) {
          let a = Math.floor((Math.random() * 10) + 1) * (Math.random() < 0.5 ? -1 : 1);
          let b = Math.floor((Math.random() * 10) + 1) * (Math.random() < 0.5 ? -1 : 1);

          let newX = (centerNode.row + a) % this.rows;
          newX = newX < 0 ? newX + this.rows : newX;

          let newY = (centerNode.col + b) % this.cols;
          newY = newY < 0 ? newY + this.cols : newY;

          clusterNodes.push(this.grid[newX][newY]);
        }
      }
    }

    const randomNodes = centerNodes.concat(clusterNodes);

    randomNodes.forEach(node => {
      this.grid[node.row][node.col].state = 1;
      let currentCell = document.querySelector(`[data-pos="${node.row},${node.col}"`);
      currentCell.classList.add('alive')
    });

    return randomNodes;

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
        cell.updateState(oldGrid, this.rows, this.cols);

        if(cell.state !== oldGrid[i][j]) {
          let currentCell = document.querySelector(`[data-pos="${cell.row},${cell.col}"`);
          cell.state === 1 ? currentCell.classList.add('alive') : currentCell.classList.remove('alive');
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
