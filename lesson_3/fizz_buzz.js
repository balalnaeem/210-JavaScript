/*
In: nothing
Out: log of numbers and string (from 1 to 100)

Rules:
- if a number is divisible by 3 and 5, log FizzBuzz to the console
- if it is divisible by 5, log Buzz
- if it is divisible by 3, log Fizz
- otherwise just log the number itself

Al:
- start a for loop
  - i = 1
  - i <= 100
  - i += 1

- inside the loop
  - conditional statement
  - IF (i % 5 === 0 && i % 3 ===0), LOG FizzBuzz
  - ELSE IF (i % 5 === 0), LOG Buzz
  - ELSE IF (i % 3 === 0), LOG Fizz
  - ELSE, LOG number
*/

function fizzbuzz() {
  let i;
  for (i = 1; i <= 100; i += 1) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();