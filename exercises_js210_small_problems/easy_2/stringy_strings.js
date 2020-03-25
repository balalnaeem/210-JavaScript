/*

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

In: number
Out: string of 1's and 0's

Rules:
- length of the output string should match the number
- always start with 1 and keep alternating between 1's and 0's

AL:
- start a for loop
- on each iteration log the current char
- alternate the chars as you go along
- stop the loop when required number of iterations done

*/

function stringy(number) {
  let result = '';
  let currentDigit = '1'
  let i;

  for (i = 0; i < number; i += 1) {
    result += currentDigit;
    currentDigit = currentDigit === '1' ? '0' : '1';
  }

  return result;
}

console.log(stringy(1));