/*

In: integer
Out: string version of the integer given

Rules:
- do not use the built in conversoin methods
- do not concatenate with string
- do this the old fashioned way - brute force

AL:
- look up methods in in Number object that you maybe able to use
-

*/

let DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let  result = '';
  let remainder;

  do {
    remainder = number % 10;
    number = Math.floor(number / 10);
    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));