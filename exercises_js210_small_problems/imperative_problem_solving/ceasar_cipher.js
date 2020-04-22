/*
PROBLEM:
- ceasar cipher is a way to encrypt text
  - it is a substitution cipher
  - each letter in the test is substituted by the letter located at a given number of positions away
  - 'a' is our letter, we want to right shift by 3
  - it will substituted by 'd'
  - 'a' => 'd'
  - 3 is the key in this cipher

Rules:
- only encrypts letters - both lower and upper case
- all other chars are left as is
- case is preserved
- if key exceeds the total number of alphabets, it wraps around the beginning

in: string, number
out: string

algorithm:
// we have a letter and a number
// find out the index of letter and in LETTERS and add number to that
// eg letter is y and number is 5
// index of y in LETTERS is 24
// 24 + 5 = 29
// 29 exceeds the total number of letters we wrap it around
// 29 % LETTERS.length
// 3
// letter at index 3 is 'd'
// so y is replaced with 's'

// now how do we preserve the case
  we can have a method that tells whether the a letter is uppercase
  - and we can have a method that shifts the letter forward and returns an appropritate letter

CODE:
- iterate over the given string
  - convert the string into chars array
- on each iteration pass the letter and key to the shiftin method
  - map over the array
- only if the current char is an alphabet, if it's not leave it as is
  - join in the end
- return new string in the end
*/
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}

function shiftRight(letter, key) {
  if (/[^a-z]/gi.test(letter)) return letter;

  let newIndex = (LETTERS.indexOf(letter.toLowerCase()) + key) % 26;
  let newLetter = LETTERS[newIndex];
  return isUpperCase(letter) ? newLetter.toUpperCase() : newLetter;
}

function caesarEncrypt(text, key) {
  return text.split('').map(char => shiftRight(char, key)).join('');
}

console.log(caesarEncrypt('A', 0));
console.log(caesarEncrypt('A', 3));
console.log(caesarEncrypt('y', 5));
console.log(caesarEncrypt('a', 47));

console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));

console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));

console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
























