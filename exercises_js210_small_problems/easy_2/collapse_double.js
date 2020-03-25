/*

Write a function that takes a string argument, and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

In: string
Out: string

Rules:
- all consecutive duplicate chars are collapsed into one char

AL:
- we are going to need to iterate over the string ofcourse
- on each iteration
  - if the next char is the same, skip the current iteration
  - if it is not the same, add the current char into the result string
- return the result string

*/

function crunch(string) {
  let result = '';
  let i;

  for (i = 0; i < string.length; i += 1) {
    if (string[i + 1] === string[i]) {
      continue;
    }

    result += string[i];
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));