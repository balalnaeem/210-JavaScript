/*
In: string
Out: string

Rules
- if the string length is odd, you return one character which is exactly the middle character
- if if the string length is even, you return the middle two characters

AL:
- if the string length is odd, return the middle character
- if the string is even length, we slice to extract the middle two characters

*/

function centerOf(string) {
  if (string.length % 2 !== 0) {
    return string[Math.floor(string.length / 2)];
  }

  return string.slice(string.length / 2 - 1, string.length / 2 + 1);
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));