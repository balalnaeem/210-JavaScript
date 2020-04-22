/*
- veigenere cipher uses polyalphabetic substitution
- instead of a key, we are given a keyword
- it uses ceasar cipher based on the letters of keyword
- each letters is treated as a shift value
a = 0
b = 1
- case does not matter
A = 0
D = 3
- so if we have a keyword `meat`
m = m's index in alphabet string = 12
e = e's index in alphavet string = 5
a = a's index in alphabet string = 0
t = t's index in alphabet string = 19

mEAt would be the same values too

- our keys are [12, 5, 0 19]
- we have four keys this time
- so we iterate over the string
  - first letter uses key  12
  - second letter uses key 5
  - third letter uses key  0
  - fourth letter uses key 10
  - fifth letter uses key 12 again
  - so on and so forth
- only letters are tranformed of course
- each time key is changing based on number of letters have been processed

algorithm:
- convert the key into an array of shift values
  1. map over the chars array
  2. return LETTERS.indexOf(char.toLowerCase());
  3. we have our array of keys
- iterate over the text
  1. convert to chars array
  2. map over the chars array
    - have a counter variable that counts the number of letters
  3. find out the current key
    - currentkey = counter % keys array length
  4. shift right based on the current char and current key
- join the resulting array and return
*/

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}

function shiftRight(letter, key) {
  let newIndex = (LETTERS.indexOf(letter.toLowerCase()) + key) % 26;
  let newLetter = LETTERS[newIndex];
  return isUpperCase(letter) ? newLetter.toUpperCase() : newLetter;
}

function vigenereCipher(text, keyword) {
  let letterCounter = 0;
  let currentKey;
  let keys = keyword.split('').map(char => {
    return LETTERS.indexOf(char.toLowerCase());
  });

  return text.split('').map(char => {
    if (/[^a-z]/gi.test(char)) return char;

    currentKey = keys[letterCounter % keys.length];
    letterCounter += 1;
    return shiftRight(char, currentKey);
  }).join('');
}

// TEST CASE
let text = "Pineapples don't go on pizzas!";
let keyword = 'meat'

console.log(vigenereCipher(text, keyword));
console.log(vigenereCipher(text, 'cab'));
console.log(vigenereCipher('Dog', 'Rabbit'));




















