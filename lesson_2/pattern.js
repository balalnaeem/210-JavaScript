/*
input: number
output: strings

rules:
  - stars start from one less the number given
  - counter always starts with one
  - num will be numbers of rows we will need
  - so if we were using a loop, we will have to iterate the num times

Al:
- set the numOfStars equal to one less than the number given
- set numbersString equal to ''
- start a for loop (loop needs to iterate 7 times)
  - conditions -
    - i = 1
    - i <= num given
    - i += 1

  - inside the loop -
  - add i to the numbers strings
  - repeat the stars the numOfStars times
  - add the two strings together
  - decrement the numberOfStars

  Next iteration:
  - numbersString === '1'
  - i === 2
  - add numbersString + i === '12'
  - repeat the '*' numberOfStars times
  - Add them two again

*/

function generatePattern(num) {
  let numberOfStars = num - 1;
  let numbersString = '';

  for(let i = 1; i <= num; i += 1) {
    numbersString += i;
    console.log(`${numbersString}${'*'.repeat(numberOfStars)}`);
    numberOfStars -= 1;
  }
}

generatePattern(20);




