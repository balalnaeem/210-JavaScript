function studentGrade() {
  rlSync = require('readline-sync');
  score1 = rlSync.question('Enter score 1: ');
  score2 = rlSync.question('Enter score 2: ');
  score3 = rlSync.question('Enter score 3: ');

  let grade = (Number(score1) + Number(score2) + Number(score3)) / 3;
  let result = 'Based on the average of your 3 scores your letter grade is "';

  if (grade >= 90) {
    console.log(result + 'A' + '".');
  } else if (grade >= 70) {
    console.log(result + 'B' + '".');
  } else if (grade >= 50) {
    console.log(result + 'C' + '".');
  } else {
    console.log(result + 'F' + '".');
  }
}

studentGrade();