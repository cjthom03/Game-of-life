
const offsets = [
  [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0]
];

const cellClasses = {
  2: "orange",
  3: "blue",
  4: "red",
  5: "yellow",
  6: "green",
  7: "purple"
};

class Cell {
  constructor(row, col, state = 0){
    this.row = row;
    this.col = col;
    this.state = state; // 0 = dead, 1 = alive
  }

  updateState(oldGrid, numRows, numCols, rule) {
    let that = this;
    let numAlive = 0;
    let neighborStates = [];
    offsets.forEach(pos => {
      let x = (that.row + pos[0]) % numRows;
      let y = (that.col + pos[1]) % numCols;
      x = x < 0 ? (x + numRows) : (x);
      y = y < 0 ? (y + numCols) : (y);
      if(oldGrid[x][y] > 0) {
         numAlive++;
         neighborStates.push(oldGrid[x][y]);
       }
    });

    switch (rule) {
      case 'life':
        return (this.state = this.lifeRules(numAlive));
      case 'brightlife':
        let nextState = this.getNextState(neighborStates);
        return (this.state = this.brightlifeRules(numAlive, nextState));
      default:
        this.state = this.lifeRules(numAlive);
    }

  }

  getNextState(neighborStates) {
    let sortedStates = neighborStates.sort((a,b) => a - b);
    for (let i = 0; i < sortedStates.length; i++) {
      if(sortedStates[i] === sortedStates[i+1]) return sortedStates[i];
    }
    return 1;
  }

  lifeRules(numAlive) {
    let newState = this.state;
    if(numAlive < 2 || numAlive > 3) {
      newState = 0;
    } else if (numAlive === 3) {
      newState = 1;
    }

    if(newState > 1) newState = 1;
    return newState;
  }

  brightlifeRules(numAlive, nextState) {
    let newState = this.state;
    if(numAlive < 2 || numAlive > 3) {
      newState = 0;
    } else if (numAlive === 3) {
      newState = nextState;
    }

    if (newState === 1) newState += Math.floor((Math.random() * 6) + 1);
    return newState;
  }

  updateClass(domCell) {
    domCell.classList.remove('alive', 'red', 'blue', 'green', 'orange', 'purple', 'yellow');

    if(this.state >= 1) {
      domCell.classList.add('alive');
      if(cellClasses[this.state]) domCell.classList.add(cellClasses[this.state]);
    }
  }
}

export default Cell;
