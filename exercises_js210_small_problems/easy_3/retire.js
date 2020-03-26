let rlSync = require('readline-sync');

let age = parseInt(rlSync.question('What is your age? '), 10);
let retirementAge = parseInt(rlSync.question('At what age would you like to retire? '), 10);
let workYears = retirementAge - age;
let currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${workYears + currentYear}.`);
console.log(`You have only ${workYears} years of work to go!`)