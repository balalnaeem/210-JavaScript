function guessPassword() {
  let rlSync = require('readline-sync');
  let password = '12346';

  for(i = 1; i <= 3; i += 1) {
    let answer = rlSync.question("What is the password? : ");

    if (answer === password) {
      console.log("You have successfully logged in.");
      return;
    }
  }

  console.log("You have been denied access.");
}

guessPassword();
