/*

In: a number (between 1 and 10);
Out: log pattern

Rules:
- first row = 1 + stars repeated one less than the given number
- last row all number

AL:

currentNumberString = ''
currentAsteriskString;

for (let i = 1; i <= num; i += 1) {
  currentNumberString += i;
  currentAsteriskString = '*'.repeat(num - i);
  console.log(currentNumberString + currentAsteriskString)
}

*/

function generatePattern(num) {
  let currentNumberString = '';
  let currentAsteriskString;

  for (let i = 1; i <= num; i += 1) {
    currentNumberString += i;
    currentAsteriskString = '*'.repeat(num - i);
    console.log(currentNumberString + currentAsteriskString);
  }
}

generatePattern(20);