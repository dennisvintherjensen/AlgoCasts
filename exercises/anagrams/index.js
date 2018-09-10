// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  // 1 
  // const filteredA = filter(stringA);
  // const filteredB = filter(stringB);
  // // The 2 strings cannot be anagrams, if the filtered 
  // // versions are not the same length
  // if (filteredA.length !== filteredB.length) {
  //   return false;
  // }
  // const charMapA = getCharMap(filteredA);
  // const charMapB = getCharMap(filteredB);
  // return compareMaps(charMapA, charMapB);

  // 2
  // Seems like much less work than 1 (not building charMaps
  // or comparing them) and still quite legiable
  // let filteredA = filter(stringA);
  // let filteredB = filter(stringB);
  // if (filteredA.length !== filteredB.length) {
  //   return false;
  // }
  // for (let char of filteredA) {
  //   filteredA = filteredA.replace(char, '');
  //   filteredB = filteredB.replace(char, '');
  //   if (filteredA.length !== filteredB.length) {
  //     return false;
  //   }
  // }
  // return true;

  // 3
  // Very short and legiable, but might have performace issues
  let filteredA = filter(stringA);
  let filteredB = filter(stringB);
  if (filteredA.length !== filteredB.length) {
    return false;
  }
  return filteredA.split('').sort().join('') === filteredB.split('').sort().join('');
}

/**
 * Compares 2 objects and return true if they have the same amount
 * of properties and the properties are of the same value
 * @param {*} mapA 
 * @param {*} mapB 
 */
function compareMaps(mapA, mapB) {
  // Comparison of the length has already been done in calling
  // function, but I'll keep it here for possible reusage of this
  // function
  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }
  for (let key in mapA) {
    if (mapA[key] !== mapB[key]) {
      return false;
    }
  }
  return true;
}

/**
 * Returns a string with all non-words filtered
 * @param {*} str 
 */
function filter(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

/**
 * Returns a map of characters
 * @param {*} str 
 */
function getCharMap(str) {
  return str.split('').reduce((map, c) => {
    map[c] = map[c]++ || 1;
    return map
  }, {});
}

module.exports = anagrams;
