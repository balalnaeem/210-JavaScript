/*

In: string
out: string (lowercased)

Rules:
- alphabetic chars get converted to lowecase
- numeric chars stay the same

AL:

- so the ascii code from lowercase alphabetic chars stars from 97
- if your ascii code is less than  or equal 90 and greater than or equal to 65, you need to be converted to lowercase
- in order to convert we do the following:
  - we get the ascii code of the current char by string.charCodeAt(index)
  - we add 32 to that
  - we convert the code into char again with String.fromCharCode(code)

Code:
- first we declare a varible that is an empty string
- start a for loop
- iterate over the chars of the string
- on each iteration check if the char is uppercase
- if it is convert it to lowercase and add to the empty string
- if it is not, add it to the empty string
- return the string at the end

*/

function toLowerCase(string) {
  let CONVERSION_OFFSET = 32;
  let resultString = '';
  let asciiCode;
  let i;

  for (i = 0; i < string.length; i += 1) {
    asciiCode = string.charCodeAt(i);
    if (string[i] >= 'A' && string[i] <= 'Z') {
      asciiCode += CONVERSION_OFFSET;
    }

    resultString += String.fromCharCode(asciiCode);
  }

  return resultString;
}

console.log(toLowerCase('ALPHABET'));
console.log(toLowerCase('123'));
console.log(toLowerCase('abcDEF'));