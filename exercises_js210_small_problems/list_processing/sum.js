/*
Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this using list processing techniques.

In: number
Out: number

AL:
- convert the number to a string
- convert the string to an array
- map over the array converting each string digit into a number
- user a reducer to find the sum of the digits
*/

let reducer = (acc, val) => acc + val;
let sum = num => String(num).split('').map(Number).reduce(reducer);

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45