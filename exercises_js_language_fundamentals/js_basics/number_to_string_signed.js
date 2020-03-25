let DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function numberToSignedString(number) {
  let newNumber = number < 0 ? number * -1 : number;
  let  result = '';
  let remainder;

  do {
    remainder = newNumber % 10;
    newNumber = Math.floor(newNumber / 10);
    result = DIGITS[remainder] + result;
  } while (newNumber > 0);


  if (number > 0) {
    result = '+' + result;
  } else if (number < 0) {
    result = '-' + result;
  }

  return result;
}

console.log(numberToSignedString(-123));
console.log(numberToSignedString(4321));
console.log(numberToSignedString(0));