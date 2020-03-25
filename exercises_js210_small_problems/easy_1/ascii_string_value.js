/*

In: string
Out: number

Rules:
- compute the sum of all chars in the string
- maybe don't ignore the empty spaces

AL:
- start a for loop
- iterate over the string
- keep adding the the ascii value to a sum variable
- break when string is finished

*/

function asciiValue(string) {
  let sum = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''));

