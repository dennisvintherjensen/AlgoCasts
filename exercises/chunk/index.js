// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

  // 1 - reduce - 2 & 3 is more legiable due to reduce having unused args
  // return array.reduce((chunked, _, index) => {
  //   if (index % size === 0) {
  //     chunked.push(array.slice(index, index + size));
  //   }
  //   return chunked;
  // }, []);

  // 2 - for loop
  // let chunked = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (i % size === 0) {
  //     chunked.push(array.slice(i, i + size));
  //   }
  // }
  // return chunked;

  // 3 while loop - most legiable - and we don't iterate every element of the array
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;

  // 4 - array lenght and existence - not as legiable as the others in my mind
  // const chunked = [];
  // for (let value of array) {
  //   const lastChunk = chunked[chunked.length - 1];
  //   if (lastChunk === undefined || lastChunk.length === size) {
  //     chunked.push([value]);
  //   } else {
  //     lastChunk.push(value);
  //   }
  // }
  // return chunked;

}

module.exports = chunk;
