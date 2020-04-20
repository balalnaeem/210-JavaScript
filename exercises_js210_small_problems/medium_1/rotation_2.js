/*
a function that rotates the last n digits of a number

input: two numbers (number, and digits to rotate)
out: one number (rotated one)

rules:
- rotate by one digit to the left
- moving the first digit to the end

73 => sliced at index 2 => 5291
i get to 2 by length - given number

first half of the string = slice(0, 2)
secong half = slice(6 - 2)

algorithm:
- convert the given number into a string
- divide the string into two halves
  - first half = string.slice(0, n)
  - second half = string.slice(n);
- rotate the second string ** define a function for that
- then add the first and second
- convert them to number and return
*/

// function rotateString(string) {
//   return string.slice(1) + string[0];
// }

// function rotateRightmostDigits(number, digits) {
//   let numString = String(number);
//   let dividingPoint = numString.length - digits;

//   let firstHalf = numString.slice(0, dividingPoint);
//   let secondHalf = numString.slice(dividingPoint);

//   secondHalf = rotateString(secondHalf);
//   return Number(firstHalf + secondHalf);
// }

function rotateRightmostDigits(number, digitsToRotate) {
  const stringArr = [...String(number)];
  const stringDigit = stringArr.splice(-digitsToRotate, 1);
  return +(stringArr.join('') + stringDigit);
}


// TEST CASES
console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);