/*
Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

in: string
output: boolean

Rules:
- we check the string if all alphabetic characters of the string are uppercase => true
- if not => false
- ignore the non-alphabetic characters

algorithm:
- clean the string of non-alphabetic characters
- define a function that checks if the given character is uppercased
- conver the string into array of letters
- there is js array method for all
- apply that method and pass in our callback function

*/

let upperLetter = letter => letter.toUpperCase() === letter;

function isUppercase(string) {
  return string.split('').every(upperLetter);
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));