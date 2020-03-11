/*

In: Three numbers (scores)
Out: String (that shows the grade)

Rules:
- if the average of 3 numbers >= 90, grade is A
- if the average of 3 numbers >= 70, grade is B
- if the average of 3 numbers >= 50, grade is C
- otherwise grade is F

AL:
- ask for input, using readline sync
- calculate the average
- based on average, decide the score
- output the string

*/
let grade;
let rlSync = require('readline-sync');

let score1 = rlSync.question('Enter score 1: ')
let score2 = rlSync.question('Enter score 2: ')
let score3 = rlSync.question('Enter score 3: ')

let average = (Number(score1) + Number(score2) + Number(score3)) / 3;

if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the average of your 3 scores your letter grade is '${grade}'.`);



















