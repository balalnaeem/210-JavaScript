/*

In: nothing
Out: message

Rules:
-if the user guesses the password correctly, display the message
-if the user didn't guess the password in 3 attempts, display the denied access message

AL:
- start a for loop
  - i = 0
  - i < 3
  - i += 1
- inside the loop, ask user for the password with readline sync
- and save the entered value into the guess variable
 - if the guess is correct, break out of the loop
 - if not continue the loop, as for password again

- outside the loop, check if the guess matches the password, if yes,
  - display the logged in message
  - else display the access denied message

*/

let password = 'abrakebabra';
let successMessage = 'You have successfully logged in.'
let failureMessage = 'You have been denied access.'
let rlSync = require('readline-sync');
let guess;
let i;

for (i = 0; i < 3; i += 1) {
  guess = rlSync.question('What is the password: ');
  if (guess === password) break;
}

if (guess === password) {
  console.log(successMessage);
} else {
  console.log(failureMessage);
}









