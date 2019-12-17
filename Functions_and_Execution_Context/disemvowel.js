// Write a function disemvowel that takes in a string and returns a new string with all vowels removed

function disemvowel(string) {
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };

  let result = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (!vowels[letter]) {
      result += string[i];
    }
  }
  return result;
}
