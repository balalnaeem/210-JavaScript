/*
Create a function that computes the Greatest Common Divisor of two positive integers.

IN: two numbers
Out: a number

Rules:
-Our number should be the greatest common divisor of the two numbers.

AL:
- first thing to figure out which number is the smaller number
- smaller number = a < b ? a : b;

- then start a for loop cunting downwards, checking at each iteration if the current number divides both our numbers
- if it does, we break out of loop, and return that number

*/

function gcd(num1, num2) {
  let smallerNum = num1 < num2 ? num1 : num2;
  for (let i = smallerNum; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
}

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));












