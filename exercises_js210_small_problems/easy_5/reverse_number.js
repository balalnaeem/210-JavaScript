/*
Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

In: number
Out: number (digits reversed)

Rules:
- trailing zeroes get dropped.
- single digit is return as is

AL:
- convert the number into a string
- convert the string into an array
- reverse the array and join the array
- then parseInt the string and return

*/

function reverseNumber(num) {
  return parseInt(String(num).split('').reverse().join(''), 10);
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));