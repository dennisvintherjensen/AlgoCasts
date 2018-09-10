// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

  // 1 - 
  // let index = 1;
  // let indexChar = '#';
  // let paddingChar = ' ';
  // while (index <= n) {
  //   let output = indexChar.repeat(index) + paddingChar.repeat(n - index);
  //   console.log(output);
  //   index++;
  // }

  // 2 - Way less readable that 1
  // let indexChar = '#';
  // let paddingChar = ' ';
  // let indexString = '';
  // for (let i = 1; i <= n; i++) {
  //   let step = '';
  //   for (let o = 1; o <= n; o++) {
  //     if (o <= i) {
  //       step += indexChar;
  //     } else {
  //       step += paddingChar;
  //     }
  //   }
  //   console.log(step);
  // }

  // 3 - Recursive function
  // Legitibility is very low but this can possibly be usefull in other circumstances
  stepsRecursive(n);
}

function stepsRecursive(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return stepsRecursive(n, row + 1);
  }
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  return stepsRecursive(n, row, stair);
}

module.exports = steps;
