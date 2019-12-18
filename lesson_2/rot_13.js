/*
input: string
output: string

Rules:
- case preservation
- non alphabet letters stay the same

Problem:
- create an array and play around with it to understand the index
- so basically get the index of current letter
- if current index + 13 is bigger than 25, user modulo 13
- 26 % 13 = this will be new index

Al:
- declare a function that takes a string as an argument
- convert the string into an array of characters
- iterate over the array with map
- check if character belongs to lowercase or uppercase
- get the index in the array, calculate the new index and return that character
- join the returning array from map into a string
- return that string

*/

let lowerCaseLetters = []
let upperCaseLetters = []

for(let i = 97; i <= 122; i += 1) {
  lowerCaseLetters.push(String.fromCharCode(i));
}

for(let i = 65; i <= 90; i += 1) {
  upperCaseLetters.push(String.fromCharCode(i));
}

function transformIndex(index) {
  if (index > 25) {
    return index % 13;
  } else {
    return index;
  }
}

function rot13(string) {
  let index;
  let new_letters = string.split('').map(letter => {
                      if (lowerCaseLetters.includes(letter)) {
                        index = lowerCaseLetters.indexOf(letter) + 13;
                        index = transformIndex(index);
                        return lowerCaseLetters[index];
                      } else if (upperCaseLetters.includes(letter)) {
                        index = upperCaseLetters.indexOf(letter) + 13;
                        index = transformIndex(index);
                        return upperCaseLetters[index];
                      } else {
                        return letter;
                      }
                    });
  return new_letters.join('');
}

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
























