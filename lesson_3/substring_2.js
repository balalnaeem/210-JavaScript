/*
Input: 3 values
              1) string 2) startIndex 3 endIndex
Output: string

Rules:
- if all is good, return the substring from the start index inclusive and end index exclusive
- if startIndex is greater than endIndex, swap their values
- if startIndex and endIndex are equal to each other, return an empty string
- if end is omitted, return the substring starting from the startIndex all the way to end
- if either start of end is than 0 or NaN, treat it as 0
- if startIndex or endIndex is greater than the length of the string, treat it as equal to the length of the string

AL
- there are gonna be a lot of conditions - But I am gonna start with the simplest case scenario and build my code from there.

- startIndex and endIndex
  - a for loop will do the job
  - stop the loop when it reaches the endIndex basically
  - and return the result string

EDGE CASES
-----------

Swapping values
---------------

- add a conditional statement that checks whether the start is smaller than the end index, and if it is, swap their values

*/

function substring(string, start, end) {
  let resultString = '';
  let i;

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    end = [start, start = end][0];
  }

  for (i = start; i < end; i += 1) {
    if (string[i] === undefined) break;
    resultString += string[i];
  }

  return resultString;
}

let string = 'hello world';

console.log(substring(string, 2, 4));
console.log(substring(string, 4, 2));
console.log(substring(string, 0, -1));
console.log(substring(string, 2));
console.log(substring(string, 'a'));
console.log(substring(string, 8, 20));