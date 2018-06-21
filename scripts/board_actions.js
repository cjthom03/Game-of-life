export const GliderPos = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 0]];
export const GunPos = [
  [0, -17], [-1, -17], [0, -16], [-1, -16], [0, -7], [-1, -7], [-2, -7],
  [1, -6], [-3, -6], [2, -5], [-4, -5], [2, -4], [-4, -4], [-1, -3],
  [1, -2], [-3, -2], [0, -1], [-1, -1], [-2, -1], [-1, 0], [2, 3],
  [1, 3], [0, 3], [2, 4], [1, 4], [0, 4], [3, 5], [-1, 5], [4, 7],
  [3, 7], [-1, 7], [-2, 7], [2, 17], [1, 17], [2, 18], [1, 18]
];
export const SpacePos = [
  [5, -3], [5, -2], [5, 1], [5, 2], [4, -1], [4, 0], [3, -1], [3, 0],
  [2, -4], [2, -2], [2, 1], [2, 3], [1, -4], [1, 3], [-1, -4], [-1, 3],
  [-2, -3], [-2, -2], [-2, 1], [-2, 2], [-3, -2], [-3, -1], [-3, 0],
  [-3, 1], [-5, -1], [-5, 0], [-6, -1], [-6, 0]
];


export const addRow = (targetCell, board) => {
  let row = Number(targetCell.id.split(',')[0]);
  let cells = board.grid[row];
  bringThemToLife(board, cells);
};

export const addCol = (targetCell, board) => {
  let col = Number(targetCell.id.split(',')[1]);
  let cells = [];
  board.grid.forEach(row => cells.push(row[col]));
  bringThemToLife(board, cells);
};

export const addShape = (positions, targetCell, board) => {
  let pos = targetCell.id.split(',');
  let row = Number(pos[0]), col = Number(pos[1]);
  let cells = [];

  positions.forEach(posDiff => {
    let x = (row + posDiff[0]) % board.rows;
    let y = (col + posDiff[1]) % board.cols;
    x = x < 0 ? (x + board.rows) : (x);
    y = y < 0 ? (y + board.cols) : (y);
    cells.push(board.grid[x][y]);
  });

  bringThemToLife(board, cells);
};

const bringThemToLife = (board, cells) => {

  cells.forEach(cell => {
    let newState = 1;
    if(board.rules === 'brightlife') newState += Math.floor((Math.random() * 6) + 1);
    cell.state = newState;
    let currentCell = document.getElementById(`${cell.row},${cell.col}`);
    cell.updateClass(currentCell);
  });
};
