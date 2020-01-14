// Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.

// ADD CODE HERE
let reduce = (arr, callback, initValue) => {
  let accumulator = initValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
};
// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
}
console.log(reduce(nums, add, 0)); // should log 8