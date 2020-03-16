/*

Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

*/

let rlSync = require('readline-sync');
let start = Number(rlSync.question('Enter the starting odd number: '));
let end = Number(rlSync.question('Enter the ending odd number: '));

for (let i = start; i <= end; i += 2) {
  console.log(i);
}