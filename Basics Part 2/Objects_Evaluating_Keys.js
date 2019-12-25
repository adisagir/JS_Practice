// You are given an object called sumMe containing several key/value pairs and a variable called total whose initial value is 0. Using a for... in loop, iterate through the keys of sumMe; if the value corresponding to a key is a number, add it to total.

const sumMe = {
  hello: "there",
  you: 8,
  are: 7,
  almost: "10",
  done: "!"
};
let total = 0;
// ADD CODE HERE
for (let property in sumMe) {
  if (typeof sumMe[property] === "number") {
    total = total + sumMe[property];
  }
}
