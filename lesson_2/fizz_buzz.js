/*

input: nothing
output: log all the numbers from 1 to 100
          - but numbers that are multiple of 3 and 5, log fizzbuzz
          - numbers that are multiples of 5 log buzz
          - numbers that are multiples of 3 log fizz

Al:
- for loop
  - i = 1
  - i <= 100
  - i += 1

  - conditional statement
    first check for 3 and 5, if true, log FizzBuzz
    then check for 5, if true, log Buzz
    then check for 3, if true, log Fizz
    else log i
*/

function fizzbuzz() {
  for(let i = 1; i <= 100; i++) {
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