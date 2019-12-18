/*
input: - string
       - start index
       - end index

output: string

Rules:
- end index (NOT inclusive)
- if start index is greater than end index, swap their values before moving forward
- if start === end, return empty string
- if end is omitted, substring must start from start index and include all the remainig chars
- if either Start or end is less than 0 or NaN, treat it as a zero
- if either start of end is greater than the length of the string treat is as the length of the string

AL:
- define your own function that validates the start and end numbers
- first validate the numbers(end can be undefined), with your function, if they are not valid, you assign them equal to 0;
- if start is greater than end, swap their values
- if start is equal to end, return an empty string
- if end is undefined, adjust the end index of the substring
- if end is greater than the length of the string, treat it as equal to string length

- start a for loop
  - i = 0;
  - i < end index
  - i += 1

  inside the loop:
  - set the start index at start + 1
  - get the current character
  - insert that character into substring variable
  - if at any point character is undefined, break out of loop
  - return the substring

*/

function validNumber(num) {
  return Number(num) === num && num >= 0;
}

function substring(string, start, end) {
  let substr = '';

  if (!validNumber(start)) {
    start = 0;
  }

  if (!validNumber(end) && end !== undefined) {
    end = 0;
  }

  if (start === end) {
    return '';
  }

  if (start > end) {
    let tempEnd = end;
    end = start;
    start = tempEnd;
  }

  if (end === undefined || end > string.length) {
    end = string.length;
  }

  for(let i = start; i < end; i += 1) {
    substr += string[i];
  }

  return substr;
}

var string = 'hello world';

console.log(substring(string, 2, 4));
console.log(substring(string, 4, 2));
console.log(substring(string, 0, -1));
console.log(substring(string, 2));
console.log(substring(string, 'a'));
console.log(substring(string, 8, 20));






















