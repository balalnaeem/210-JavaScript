function charCounter() {
  let rlSync = require('readline-sync');
  let phrase = rlSync.question('Please enter a phrase: ');

  console.log(phrase);
}

charCounter();