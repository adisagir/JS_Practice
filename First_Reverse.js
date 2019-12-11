function FirstReverse(str) {

  // code goes here
  let newString = ""
  for (let i=str.length-1; i>= 0; i--) {
    newString += str[i]
  }
  return newString;

}

// keep this function call here 
console.log(FirstReverse(readline()));