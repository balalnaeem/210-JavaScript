/*
In: A positive integer greater than 2
Out: Log all combination of two prime numbers that add up to the given number

Rules:
- If the number is odd, or less than 4, we log null
- log the prime pairs with smaller number first
- no duplicates
- if a prime number has been used in a pair, it wont be used again

AL:

- guard clause => checks whether the number is odd or less than 4

- divide the number by 2 and get the middle point
- starting from 2 and till the middle point (exclusive), get all the prime numbers into an array
- starting from middle point and till the number(exclusive), get all the prime numbers into an array
- Iterate over the first array
  - check if the integer combines with any integer from the second array and makes up the number
  - if it does, put them both into an array
- Log all the combinations


PSEUDO CODE:

FUNCTION checkGoldbach(NUM) {
  IF (NUM < 4 || NUM % 2 !== 0) {
    CONSOLE.LOG(NULL);
    RETURN;
  }

  LET MIDDLE_POINT = NUM / 2;
  LET FIRST_HALF = [];
  LET SECOND_HALF = [];

  FOR (I = 2; I < MIDDLE_POINT; I += 1) {
    IF (IS_PRIME(I)) {
      FIRST_HALF.PUSH(I);
    }
  }

  FOR (I = MIDDLE_POINT; I < NUM; I += 1) {
    IF (IS_PRIME(I)) {
      SECOND_HALF.PUSH(I);
    }
  }

  SECOND_HALF.REVERSE();

  FOR LOOP IS BETTER
 }

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

function checkGoldbach(num) {
  if (num < 4 || num % 2 !== 0) {
    console.log(null);
    return;
  }

  if (num === 4) {
    console.log(`2 2`);
  }

  let middlePoint = num / 2;
  let firstHalf = [];
  let secondHalf = [];
  let primeCombs = [];

  for (let i = 2; i < middlePoint; i += 1) {
    if (isPrime(i)) {
      firstHalf.push(i);
    }
  }

  for (let i = num; i > middlePoint; i -= 1) {
    if (isPrime(i)) {
      secondHalf.push(i);
    }
  }

  firstHalf.forEach(num1 => {
    secondHalf.forEach(num2 => {
      if (num1 + num2 === num) {
        primeCombs.push([num1, num2]);
      }
    });
  });

  primeCombs.forEach(comb => {
    console.log(`${comb[0]} ${comb[1]}`);
  })
}




















