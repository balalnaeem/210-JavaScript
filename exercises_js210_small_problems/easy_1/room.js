let rlSync = require('readline-sync');



let length = Number(rlSync.question('Enter the length of the room in meters:\n'));
let width = Number(rlSync.question('Enter the width of the room in meters:\n'));

let squareMeters = length * width;
let squareFeet = (length * width) * 10.7639;

console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`);