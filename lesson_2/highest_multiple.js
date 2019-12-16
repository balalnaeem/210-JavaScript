/*

input: number
out: all the multiples of the number from 1 to 100 inclusive

Rules: - multiples must be odd
       - and logged in descending order

Al
- for loop
  - i = largest multiple
  - 1 >= number
  - i -= number

  -console.log(i) if i is odd.

*/

function logMultiples(num) {
  largest_multiple = Math.floor(100 / num) * num;
  for(let i = largest_multiple; i >= num; i -= num ) {
    if (i % 2 !== 0){
      console.log(i);
    }
  }
}

logMultiples(17);