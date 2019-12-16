/*
input: number
output: boolean

Rules: - return true if the number is prime
       - return false otherwise

What is a prime number?
- prime is a number that is divisible only by itself and 1
 for example(3, 7, 13, 17)
- 0 is not a prime number

Al:
- declare a function
  - return false if the number is 0
  - for loop
    - i = 2
    - i <= number / 2
    - i++

    - if number % i == 0, return false

  return true
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

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));