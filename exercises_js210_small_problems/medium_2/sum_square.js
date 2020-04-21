/*
a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

Problem:
- so if we have are given a number say 5
- first 5 positive integers are [1, 2, 3, 4, 5]
- square of the sum is
  1+2+3+4+5 = 15**2 = 255
- sum of the squares is
  [1**2, 2**2, 3**2, 4**2, 5**2]
  [1,     4,     9,   16,    25]
  = 55
  answer 255 - 55 = 200

input: number
out: number

algorithm:
- define a sum reducer function that computes the sum of all values in the array
- and then find squareOfSum
- map over the --- array --- and convert each num to it's square
- then find the sumOfSquares
- then find the difference

how to build the array
- use a for loop
- start from 1 finish when it is <= to the number given and push them all in an array
*/
let sum = (acc, val) => acc + val;

function sumSquareDifference(num) {
  let numsArr = [];

  for (let i = 1; i <= num; i += 1) {
    numsArr.push(i);
  }

  let squareOfSum = numsArr.reduce(sum)**2;
  let sumOfSquares = numsArr.map(num => num**2).reduce(sum);
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(100));