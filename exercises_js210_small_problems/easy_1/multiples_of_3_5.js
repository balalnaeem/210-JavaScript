/*

In: number
Out: number

Rules:
- compute the sum of all numbers between 1 and the given number
- and by all numbers we mean the numbers that are multiple of 3 and 5
- inclusive

AL:
- set the starting number at 3,
- set the sum at zero
- start a for loop
  - increment by 1 and check if the number is multiple of 3 and 5
  - if it is add it to the sum
- return sum in the end

*/

function multisum(number) {
  let sum = 0;
  let i;

  for (i = 3; i <= number; i += 1) {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));