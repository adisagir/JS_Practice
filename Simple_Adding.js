function SimpleAdding(num) {

  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// keep this function call here 
SimpleAdding(readline());