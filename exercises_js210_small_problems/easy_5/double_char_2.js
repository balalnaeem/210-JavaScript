/*
In: string
Out: string

Rules:
- double the consonants in the result string
- vowels will only be logged once
- and no alphabetic characters are also logged only once

AL:
- previous logic is fine, just need another function that checks whether the character is alphabetic

*/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function doubleConsonants(string) {
  let resultString = '';
  let i;

  for (i = 0; i < string.length; i += 1) {
    resultString += string[i];
    if (isAlphabetic(string[i]) && !VOWELS.includes(string[i])) {
      resultString += string[i];
    }
  }

  return resultString;
}

function isAlphabetic(char) {
  char = char.toLowerCase();
  return char >= 'a' && char <= 'z';
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));