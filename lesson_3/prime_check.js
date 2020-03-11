/*
In: a number
Out: boolean

Rules:
- if the given number is prime, we return true
- return false otherwise

what is prime?
  - a number that is divisible by only itself and 1
  - 1 is not a prime

AL:
- we start a for loop
- i = 2;
- i <= number
- i += 1

- check if the i divides into the number perfectly
- if it does at any point during the loop, we break and return false
- else we return true
*/

function isPrime(num) {
  let i;
  if (num <= 1) return false;

  for (i = 2; i < num; i += 1) {
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