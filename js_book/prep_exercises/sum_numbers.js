// adding two numbers from the user input

let rlSync = require('readline-sync');

let number1 = rlSync.question("Enter the first number: ");

let number2 = rlSync.question("Now enter the second number: ")

console.log(`The sum of both numbers is ${Number(number1) + Number(number2)}.`);