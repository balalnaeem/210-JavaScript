function calculateGrade() {
  let rlSync = require('readline-sync');
  let counter = 1;
  let scores = [];

  while (true) {
    prompt = `Enter Score ${counter}: `
    answer = Number(rlSync.question(prompt));
    scores.push(answer);

    another_score = rlSync.question('Would you like to enter another score? ("y" for yes): ');
    if (another_score !== 'y') {
      break;
    }

    counter += 1;
  }

  let totalScore = 0;
  for (var i = scores.length - 1; i >= 0; i--) {
    totalScore += scores[i];
  }

  console.log(totalScore / scores.length);
}

calculateGrade();