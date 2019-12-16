/*
input: number
output: all combinations of primes that add up to the given number

Rule:
- If number is less than 4
    return null
- If number is odd
    return null
- if there are more than one combinations
    log them all

Problem:
- a guard clause at the start
- iterate down from the given number and find all prime nuumbers
- or iterate up till the number to get all prime numbers

**How: get the combinations that dd up to the number from the primes**
  - I can use two forEach's and keep logging the combinations as I am iterating through the array of numbers

Al:
- initialize an empty array
- use a for loop to iterate down
  - during iteration if the number is prime, push it into the array

- now I have the array of the prime numbers below that number
  - forEach over the array
  - for each element forEach over the array again
    with two conditions
      i + j === number
      and j >= i s (so I don't repeat combinations that have already been made)
*/


function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for(let i = 2; i <= num/2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(num) {
  if (num < 4 && num % 2 === 1) {
    console.log(null);
    return;
  }

  primesArray = [];
  for(let i = num; i >= 1; i -= 1) {
    if (isPrime(i)) {
      primesArray.push(i);
    }
  }

  primesArray.reverse();

  primesArray.forEach(i => {
    primesArray.forEach(j => {
      if (i + j === num && j >= i) {
        console.log(`${i} ${j}`)
      }
    });
  });
}

checkGoldbach(100);


























