function multiply() {
  let num1 = getNumber("Enter the first number: ");
  let num2 = getNumber("Enter the second number: ");
  let num3 = num1 * num2;
  console.log(`${num1} * ${num2} = ${num3}`);
}

function getNumber(prompt) {
 let rlSync = require('readline-sync');
 return parseFloat(rlSync.question(prompt));
}

multiply();