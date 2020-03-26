let rlSync = require('readline-sync');

let firstNumber = parseInt(rlSync.question('Enter the 1st number: '), 10);
let secondNumber = parseInt(rlSync.question('Enter the 2nd number: '), 10);
let thirdNumber = parseInt(rlSync.question('Enter the 3rd number: '), 10);
let fourthNumber = parseInt(rlSync.question('Enter the 4th number: '), 10);
let fifthNumber = parseInt(rlSync.question('Enter the 5th number: '), 10);
let lastNumber = parseInt(rlSync.question('Enter the last number: '), 10);

let fiveNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];

if (fiveNumbers.some(ele => ele === lastNumber)) {
  console.log(`The number ${lastNumber} appears in [${fiveNumbers.join(', ')}]`);
} else {
  console.log(`The number ${lastNumber} does not appears in [${fiveNumbers.join(', ')}]`);
}