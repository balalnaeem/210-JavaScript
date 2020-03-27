function repeater(string) {
  let doubleString = '';
  let i;

  for (i = 0; i < string.length; i += 1) {
    doubleString += string[i];
    doubleString += string[i];
  }

  return doubleString;
}

console.log(repeater("Hello"));
console.log(repeater("Good Job"));
console.log(repeater(""));