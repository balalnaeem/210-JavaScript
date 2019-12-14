/*
input: positve integer
output: log all the odd numbers starting from 1 till the given number

Al:
  - for loop
  - initialize i = 1
  - condition: i <= input number
  - increment by 2
  - log i
*/

function logOddNumbers(num) {
  for(let i = 1; i <= num; i += 2) {
    console.log(i);
  }
}

logOddNumbers(19);