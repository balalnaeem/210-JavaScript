/*

Input: 3 values
                1) string
                2) number (start index)
                3) number (length of the substring)

Output: string

Rules:
- if start index is negative treat it like (length + start index)
- if length exceeds the number of characters available, just use the available characters

AL:

- declare a varible that will hold the resulting string
- start a for loop
  - iterate over the string starting from given start index
  - on each iteration, add the current char to the resulting string
  - if current char is undefined, which means we are going beyond the boundries of the string, break out of loop
- at this point you return the result string

*/

function substr(string, start, length) {
  let resultString = '';
  let i;

  if (start < 0) {
    start = string.length + start;
  }

  for (i = start; i < start + length; i +=1) {
    if (string[i] === undefined) break;
    resultString += string[i];
  }

  return resultString;
}

let string = 'hello world';

console.log(substr(string, 2, 4));
console.log(substr(string, -3, 2));
console.log(substr(string, 8, 20));
console.log(substr(string, 0, -20));
console.log(substr(string, 0, 0));