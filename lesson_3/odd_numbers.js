/*

In: a positive number
Out: log of odd numbers
    - starting from 1
    - including the given number

Al:

- start a for loop
- i = 1;
- until i <= number
- i += 2
- log i at every iteration
*/


function logOddNumbers(num) {
  for (let i = 1; i <= num; i += 2) {
    console.log(i);
  }
}



logOddNumbers(19)