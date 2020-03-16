let rlSync = require('readline-sync');

let bill = parseInt(rlSync.question('What is the bill? '), 10);
let tipPercent = parseInt(rlSync.question('What is the tip percentage? '), 10);

let tip = bill * tipPercent / 100;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);