// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - 1); j++) {
      if (arr[j] > arr[j + 1]) {

        // Using temp variable
        // const valueAtJ = arr[j];
        // arr[j] = arr[(j + 1)];
        // arr[(j + 1)] = valueAtJ;

        // Using splice: Remove 2 elements at j's index, then insert them in reversed order
        arr.splice(j, 2, arr[(j + 1)], arr[j]);

      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (var j = (i + 1); j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const valueAtMin = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = valueAtMin;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const center = Math.floor((arr.length / 2));
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  console.log(left.length, right.length);
  const arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  arr.push(...left, ...right);
  return arr;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
