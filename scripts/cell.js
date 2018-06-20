
const offsets = [
  [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]
];

class Cell {
  constructor(row, col, state = 0){
    this.row = row;
    this.col = col;
    this.state = state; // 0 = dead, 1 = alive
  }

  updateState(oldGrid, numRows, numCols, rule) {
    let that = this;
    let numAlive = 0;
    let stateSum = 0;
    offsets.forEach(pos => {
      let x = (that.row + pos[0]) % numRows;
      let y = (that.col + pos[1]) % numCols;
      x = x < 0 ? (x + numRows) : (x);
      y = y < 0 ? (y + numCols) : (y);
      if(oldGrid[x][y] > 0) {
         numAlive++;
         stateSum = stateSum + oldGrid[x][y];
       }
    });


    switch (rule) {
      case 'life':
        return (this.state = this.lifeRules(numAlive));
      case 'highlife':
        return (this.state = this.highlifeRules(numAlive));
      default:
        this.state = this.lifeRules(numAlive);
    }

  }

  lifeRules(numAlive) {
    if(numAlive < 2 || numAlive > 3) {
      return 0;
    } else if (numAlive === 3) {
      return 1;
    } else {
      return this.state;
    }
  }

  highlifeRules(numAlive) {
    if(numAlive < 2 || numAlive > 3) {
      return 0;
    } else if (numAlive === 3 || numAlive === 6) {
      return 1;
    } else {
      return this.state;
    }
  }

}

export default Cell;
