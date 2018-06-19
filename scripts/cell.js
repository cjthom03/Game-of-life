
const offsets = [[-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]];

class Cell {
  constructor(row, col, state = 0){
    this.row = row;
    this.col = col;
    this.state = state; // 0 = dead, 1 = alive
  }

  updateState(oldGrid, numRows, numCols) {
    let that = this;
    let numAlive = 0;
    offsets.forEach(pos => {
      let x = (that.row + pos[0]) % numRows;
      let y = (that.col + pos[1]) % numCols;
      x = x < 0 ? (x + numRows) : (x);
      y = y < 0 ? (y + numCols) : (y);
      if(oldGrid[x][y] > 0) numAlive++;
    });

    if(numAlive < 2 || numAlive > 3) {
      this.state = 0;
    } else if (numAlive === 3) {
      this.state = 1;
    }

  }

}

export default Cell;
