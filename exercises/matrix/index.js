// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let counter = 1;
  const grid = Array.apply(null, Array(n)).map(_ => []);
  while (startRow <= endRow && startCol <= endCol) {

    // Top row
    for (let i = startCol; i <= endCol; i++) {
      grid[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      grid[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // Bottom row
    for (let i = endCol; i >= startCol; i--) {
      grid[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Left column
    for (let i = endRow; i >= startRow; i--) {
      grid[i][startCol] = counter;
      counter++;
    }
    startCol++;

  }

  return grid;

}


module.exports = matrix;


























// let startRow = 0;
//   let endRow = n - 1;
//   let startCol = 0;
//   let endCol = n - 1;
//   let counter = 1;
//   let results = Array.apply(null, Array(n)).map(elm => []);
//   //     1           1         2           1
//   while (startCol <= endCol && startRow <= endRow) {
//     // Top row
//     for (let col = startCol; col <= endCol; col++) {
//       results[startRow][col] = counter;
//       counter++;
//     }
//     startRow++;
//     // Right col
//     for (let row = startRow; row <= endRow; row++) {
//       results[row][endCol] = counter;
//       counter++;
//     }
//     endCol--;
//     // Bottom row
//     for (let col = endCol; col >= startCol; col--) {
//       results[endRow][col] = counter;
//       counter++;
//     }
//     endRow--;
//     // Left col
//     for (let row = endRow; row >= startRow; row--) {
//       results[row][startCol] = counter;
//       counter++;
//     }
//     startCol++
//   }
//   return results;