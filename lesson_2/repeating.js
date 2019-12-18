function isPositiveInteger(value) {
  return Number(value) === value && value >= 0;
}

function repeat(string, times) {
  if (!isPositiveInteger(times)) {
    return undefined;
  }

  let repeatedString = ''
  for(let i = times; i > 0; i -= 1) {
    repeatedString += string;
  }

  return repeatedString;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined