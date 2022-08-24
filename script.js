/**
 * Time complexity is O(n*m)
 * @param {matrix[][]} matrix
 * @return {number[]}
 */
const twoDMatrix = (matrix) => {
  let riverSizes = [];
  let visitedMatrix = matrix.map((row) => row.map(() => false)); // auxilary/additional data structure to set default visited with false

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let river = { size: 0 };
      traverseRiver(matrix, row, col, visitedMatrix, river);
      if (river.size > 0) {
        riverSizes.push(river.size);
      }
    }
  }
  return riverSizes;
};

const traverseRiver = (matrix, row, col, visitedMatrix, river) => {
  if (matrix[row][col] === 0) return;
  if (isVisited(visitedMatrix, row, col)) return;
  visitedMatrix[row][col] = true;
  river.size++;

  const neighbours = getNeighbours(matrix, row, col);

  for (const [nbrRow, nbrCol] of neighbours) {
    traverseRiver(matrix, nbrRow, nbrCol, visitedMatrix, river);
  }
};

/**
 * If node visited already
 * @param {number[][]} matrix
 * @param {number} row
 * @param {number} col
 * @returns boolean
 */
const isVisited = (matrix, row, col) => {
  return matrix[row][col] ? true : false;
};

const getNeighbours = (matrix, row, col) => {
  let neighbours = [];
  if (row !== 0) neighbours.push([row - 1, col]);
  if (row !== matrix.length - 1) neighbours.push([row + 1, col]);
  if (col !== 0) neighbours.push([row, col - 1]);
  if (col !== matrix[row].length - 1) neighbours.push([row, col + 1]);
  return neighbours;
};

const largeMatrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

const smallMatrix = [
  [1, 0, 0],
  [1, 0, 1],
  [0, 1, 0],
];
console.log(twoDMatrix(largeMatrix)); // [2,1,5,2,2]
console.log(twoDMatrix(smallMatrix)); // [2,1,1]
