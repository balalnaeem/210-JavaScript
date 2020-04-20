/*
735291
- 352917
-- 329175
--- 321759
---- 321597
----- 321579

function that takes a number as an argument and returns the maximum rotation of that number.
we can use the previous method

in: number
out: number - max rotated

PROBLEM:
- if the length of the string is 6, there need to be 6 rotations

AL:
- convert the given number to a string
- create an empty string variable
- rotate the string once,
  - insert the first char into our empty string
  - reassign the string to slice(1);
- repeat the above 6 times
- conver the result string into a number and return

*/


function rotateString(string) {
  return string.slice(1) + string[0];
}

function maxRotation(number) {
  let i;
  let resultString = '';
  let numString = String(number);
  let length = numString.length;

  for (i = 0; i < length; i += 1) {
    numString = rotateString(numString);
    resultString += numString[0];
    numString = numString.slice(1);
  }

  return Number(resultString);
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));
