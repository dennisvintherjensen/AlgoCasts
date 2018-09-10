// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

  // 1 - Simple and straight forward using while and string repeat.
  // The math might make this a bit less legible, but I like it
  // const padding = ' ';
  // const block = '#';
  // let index = 1;
  // while (index <= n) {
  //   const paddingCount = n - index;
  //   const blockCount = index * 2 - 1;
  //   console.log(
  //     padding.repeat(paddingCount) +
  //     block.repeat(blockCount) +
  //     padding.repeat(paddingCount)
  //   );
  //   index++;
  // }

  // 2 - 
  // const levelWidth = n * 2 - 1;
  // const midpoint = Math.floor((2 * n - 1) / 2);
  // for (let level = 0; level < n; level++) {
  //   let levelString = '';
  //   for (let block = 0; block < levelWidth; block++) {
  //     if (midpoint - level <= block && midpoint + level >= block) {
  //       levelString += '#';
  //     } else {
  //       levelString += ' ';
  //     }
  //   }
  //   console.log(levelString);
  // }

  // 3 - Recursive
  pyramidRecursive(n);
}

function pyramidRecursive(n, level = 0, levelString = '') {
  // If current level is equal to n, stop.
  if (level === n) {
    return;
  }
  const levelWidth = n * 2 - 1;
  // If required width for current level has been reached
  // then log level and continue with next level
  if (levelString.length === levelWidth) {
    console.log(levelString);
    return pyramidRecursive(n, level + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  // Append '#' or ' ' to levelString
  if (midpoint - level <= levelString.length && midpoint + level >= levelString.length) {
    levelString += '#';
  } else {
    levelString += ' ';
  }
  return pyramidRecursive(n, level, levelString);
}

module.exports = pyramid;
