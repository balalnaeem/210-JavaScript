const DIGITS = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
}

function stringToDigits(string) {
  let chars = string.split('').filter(char => {
    return Object.keys(DIGITS).includes(char);
  });
  return chars.map(char => DIGITS[char]);
}

function stringToSignedInteger(string) {
  let digits = stringToDigits(string);
  let value = 0;
  let i;

  for(i = 0; i < digits.length; i += 1) {
    value = 10 * value + digits[i];
  }

  if (string[0] == '-') {
    value *= -1;
  }

  return value;
}


console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100