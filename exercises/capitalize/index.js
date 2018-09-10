// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  // 1 - Quite legitable
  // return str.split(' ')
  //   .map(word => word[0].toUpperCase() + word.slice(1))
  //   .join(' ');

  // 2 - Also quite legitable, but 1 is more legitable
  // let capitalized = '';
  // for (let word of str.split(' ')) {
  //   capitalized += word[0].toUpperCase() + word.slice(1) + ' ';
  // }
  // return capitalized.trim();

  // 3 - Replace with capture group, I prefer this since it's short and legitable
  return str.replace(
    /\b(\w)/g,
    (firstLetter) => firstLetter.toUpperCase()
  );

}

// "asd qwe asd".replace(/\b(\w)/g, (firstLetter) => firstLetter.toUpperCase());
// "asd asd asd".split(' ').map(word => word[0].toUpperCase() + word.slice(1) )

module.exports = capitalize;
