// Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped

function arrayBuilder(obj) {
  // your code here...
  let countArr = [];
  for (let property in obj) {
    for (let i = 0; i < obj[property]; i++) {
      countArr.push(property);
    }
  }
  return countArr;
}

//Comment in the code below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []
