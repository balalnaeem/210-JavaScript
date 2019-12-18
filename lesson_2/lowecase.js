/*
input: string
output: string

Rules:
- convert the string to lowercase
- ignore the non-alphabetic characters

Al:
- get the length of the string
- start a for loop with that length
  - i = 0
  - i < length
  - i += 1
  - check if the character at current length has the ascii code between 65 and 90
  - use string.charCodeAt(indexOfChar)
  - use String.fromCharCode(number)
  - if the code is not between 65 and 90, go to the next iteration
  - if it is in 65 and 90, add 32 to the code, and then convert that code to character
  - keep adding the characters to an empty string variable as you go along, return that variable in the end

*/

function toLowerCase(string) {
  let lowerCaseString = '';
  let ascii;

  for(let i = 0; i < string.length; i += 1) {
    asciiCode = string.charCodeAt(i);
    if (asciiCode >= 65 && asciiCode <= 90) {
      asciiCode += 32;
    }

    lowerCaseString += String.fromCharCode(asciiCode);
  }

  return lowerCaseString;
}

console.log(toLowerCase('abcDEF'));







