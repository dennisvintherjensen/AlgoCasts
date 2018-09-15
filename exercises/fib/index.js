// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 1 - Very legiable, but retains all numbers in an array, 
// this does not seem to affect mem usage though
// Runtime Complexity = n / linear
// function fib(n) {
//   let fibs = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = fibs[i - 1];
//     const b = fibs[i - 2]
//     fibs.push(a + b);
//   }
//   return fibs[n];
// }

// 2 - Less legiable, more code, but does not retain all previous numbers
// Runtime Complexity = n / linear
// function fib(n) {
//   let fib1 = 0;
//   let fib2 = 1;
//   let fibTemp = 0;
//   for (let i = 2; i <= n; i++) {
//     fibTemp = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = fibTemp;
//   }
//   return fib2;
// }

// 3 - Recursive solution with extra args - might hit maximum call stack
// Runtime Complexity = n / linear
// function fib(n, i = 1, a = 0, b = 1) {
//   if (n === 0) {
//     return n;
//   }
//   if (n === i) {
//     return b;
//   }
//   return fib(n, (i + 1), b, (a + b));
// }

// 4 - Bad recursive solution
// Runtime Complexity = 2 ^ n / exponential
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// 5 - Recursive solution improving on exponential runtime complexity
// by adding a memory array.
// Runtime Complexity =  log(n) / logarithmic
// function fib(n, mem = []) {
//   if (n < 2) {
//     return n;
//   }
//   if (!mem[n]) {
//     mem[n] = fib(n - 1, mem) + fib(n - 2, mem);
//   }
//   return mem[n];
// }

// 6 Recursive solution eliminating exponential runtime complexity
// by using memoization - hits maximum call stack earlier than 3
// Runtime Complexity =  n / linear
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (!cache[args]) {
      cache[args] = fn.apply(this, args);
    }
    return cache[args];
  }
}
fib = memoize(fib);


module.exports = fib;
