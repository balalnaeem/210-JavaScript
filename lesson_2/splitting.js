/*
input: a string, and delimiter(string) [two strings basically]
output: logs every word of the split string

Rules:
- split string at the given delimiter
- do not use any built in methods
- can use `[]` and `length`

Problem:
  - we can initialize an empty array to store resulting splits in
  - also intialize a variable set to an empty string
  - start a for loop
    - i - 0
    - i < string.length
    - i += 1

    - inside the loop
    - see if current char in string is === delimiter
      - if it is insert the word variable into the array
    - if it isn't insert the current char into the word

*/

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter");
    return;
  }

  let wordsArray = [];
  let word = '';

  for(let i = 0; i < string.length; i += 1) {
    if (word === delimiter) {
      wordsArray.push(string[i]);
    } else if (string[i] === delimiter) {
      wordsArray.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }

  if (word !== '') {
    wordsArray.push(word);
  }

  wordsArray.forEach(word => console.log(word));
 }

 splitString('abc,123,hello world', ',');
 splitString('hello');
 splitString('hello', '');
 splitString('hello', ';');
 splitString(';hello;', ';');

















