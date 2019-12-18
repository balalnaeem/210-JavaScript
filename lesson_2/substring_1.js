/*

input: - string
       - start(number)
       - length(number)

output: string

Rules:
- create a substring from the given string
- starting index is the 'start' argument
- and and the length of the substring should be the given length argument
- if start is negative, consider (string.length - start) the starting index, where string is the given string
- if length argument exceeds the number of characters available, just use the available characters

AL:
- declare a function
  - declare a variable substring
  - check if start is negative, if it is adjust the value
  - check if length is negaive or zero, return an empty string
  - start a for loop
    - i = 0
    - i < length
    - i += 1
    inside the loop
    - break if current value id undefined
    - get the char at the start index
    - indert that into substring
    - increment the start index
  return the substring
*/

function substr(string, start, length) {
  let substring = '';
  if (start < 0) {
    start = string.length + start;
  }

  for(let i = 0; i < length; i += 1) {
    if (string[start] === undefined) {
      break;
    }

    substring += string[start];
    start += 1;
  }

  return substring;
}

var string = 'hello world';

console.log(substr(string, 2, 4));
console.log(substr(string, -3, 2));
console.log(substr(string, 8, 20));
console.log(substr(string, 0, -20));
console.log(substr(string, 0, 0));


















