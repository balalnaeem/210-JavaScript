/*

Create a function that computes the Greatest Common Divisor of two positive integers.

In: two numbers
Out: one number

Rules
  - find the number that is the greatest possible and also divides both the numbers

Problem:
- the number can't be bigger than the smaller of the two numbers
- so i can start iterating downwards from the smaller number
- untile I find the number that divide both of the numbers
- first I will have to figure out which one is the smaller number
- And then use that as start of iteration

Al:
- if num1 > num2
  - smaller_number = num2 and vice versa
  - start a for loop
    - i = smaller number
    - i >= 1
    - i -= 1

  if num1 % i === 0 && num2 % i === 0
    r=console.log(i)
    break
*/

// Examples

function gcd(num1, num2) {
  let smaller;
  if (num1 < num2) {
    smaller = num1;
  } else {
    smaller = num2;
  }

  while (smaller >= 1) {
    if (num1 % smaller === 0 && num2 % smaller === 0) {
      console.log(smaller);
      break;
    }
    smaller -= 1;
  }
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1



















