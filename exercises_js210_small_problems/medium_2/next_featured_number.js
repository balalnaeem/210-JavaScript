/*
NEXT FEATURED NUMBER

A featured number is
  - an odd number
  - is multiple of 7
  - and all of its digits occur only once

49 is a featured number
98 is not (its not odd)
97 is not (its not multiple of 7)
133 is not either (the digit 3 appears twice)

in: integer
out: next featured number greater than the integer given

rules:
- issue error message if there no next featured number
- largest possible featured number is 9876543201

algorithm:
- so we are given a number. For example:
  - 12 % 7 = 5
  - 7 - 5 = 2
  - 12 + 2 = 14 next multiple of 7
>> define a function that gets next multiple of 7
- start a loop
  while the number is less than 9876543201
    - check if number is odd? >> a function?
    - check if all digits occur once >> a function
    - if both true, return the number
    - if false, add 7 to the number and go to next iteration

*/
const BIGGEST = 9876543201;
let nextMultipleOf7 = num => num + (7 - (num % 7));
let isOdd = num => num % 2 !== 0;
let allDigitsOnce = num => {
  return String(num).split('').every(function(val, index, self) {
    return self.indexOf(val) === index;
  });
}

function featured(num) {
  num = nextMultipleOf7(num);

  while (num < BIGGEST) {
    if (isOdd(num) && allDigitsOnce(num)) {
      return num;
    }

    num += 7;
  }

  return 'There is no next featured number.';
}

console.log(featured(999999987));