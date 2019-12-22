// Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.

let calls = "";

function jerry(str) {
  str = str + "Jerry";
  console.log(str);
  return kramer(str);
}

function george(str) {
  str = str + "George";
  console.log(str);
  return elaine(str);
}

function elaine(str) {
  str = str + "Elaine";
  console.log(str);
  return str;
}

function kramer(str) {
  str = str + "Kramer";
  console.log(str);
  return george(str);
}

// should return: 'JerryKramerGeorgeElaine'
calls = jerry(calls);