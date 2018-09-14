// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

  // 1 - Best readability and shortest
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;

  // 2
  // let vowelsCount = 0;
  // const vowelChars = ['a', 'e', 'i', 'o', 'u'];
  // for (let char of str.toLowerCase()) {
  //   if (vowelChars.includes(char)) {
  //     vowelsCount++
  //   }
  // }
  // return vowelsCount;

}

module.exports = vowels;
