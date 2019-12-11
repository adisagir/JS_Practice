function LetterChanges(str) {
  str = str.replace(/[a-zA-Z]/g, function (char) {
    if (char === 'z') return 'a';
    else if (char === 'Z') return 'A';
    else return String.fromCharCode(char.charCodeAt(0) + 1);
  });

  return str.replace(/[aeiou]/g, function (char) {
    return char.toUpperCase();
  });
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());