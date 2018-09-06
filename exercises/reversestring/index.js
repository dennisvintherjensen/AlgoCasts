// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // 1
  //return Array.from(str).reverse().join('');
  // 2
  //return str.split('').reverse().join('');
  // 3
  // let reversedString = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedString += str[i];
  // }
  // return reversedString;
  // 4
  let reversedString = '';
  for (let character of str) {
    reversedString = character + reversedString;
  }
  return reversedString;
  // 5
  // return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
