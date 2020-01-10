/* Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.
*/

// ADD CODE HERE
let pluralize = arrOfStr => {
  let pluralized = [];
  for (let i = 0; i < arrOfStr.length; i++) {
    pluralized.push(arrOfStr[i] + "s");
  }
  return pluralized;
};
// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]