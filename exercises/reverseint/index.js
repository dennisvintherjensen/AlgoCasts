// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // 1 - Not very readable
  // return parseInt((n < 0 ? '-' : '') + n.toString().split('').reverse().join(''));
  // 2 Not much better
  // return Math.sign(n) * parseInt(n.toString().split('').reverse().join('').replace('-', ''));
  // Can be improved by refactoring into smaller statements
  // 3 More readable
  const reversedInt = n.toString().split('').reverse().join('');
  return Math.sign(n) * parseInt(reversedInt);
}

module.exports = reverseInt;
