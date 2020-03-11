/*

In: nothing
Output: log of numbers between 1 and 100

Rules:
- numbers should be divisble by 3 or 5 or both
- if a number is divisible by both 3 and 5, append ! to that number
- logged values are strings

Al:
- start a for loop
- starting value i is 3
- condition is that i <= 100
- i incremented by 1

- at each iteration
  - conditional statement
    - if number is a multiple of 3 and 5 both
      - convert into a string and append '!' and log
    - else if number is multiple of 5
      - convert into a string and log
    - else if number is multiple of 3
      - convert into a string and log
    - else
      - next
    - end
*/

function multipleOfThreeAndFive(start, end) {
  let num;
  for (num = start; num <= end; num += 1) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log(`${num + '!'}`);
    } else if (num % 5 === 0 || num % 3 === 0) {
      console.log(String(num));
    }
  }
}

multipleOfThreeAndFive(5, 50);