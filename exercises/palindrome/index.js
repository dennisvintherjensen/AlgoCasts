// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // 1
  // return str.split('').reverse().join('') === str;
  // 2
  // return str.split('').reduce((reversed, char) => char + reversed, '') === str;
  // 3
  // let reversed = '';
  // for (let char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed === str;
  // 4
  return str.split('').every((char, index) => char === str.charAt(str.length - (index + 1)));
}

module.exports = palindrome;
