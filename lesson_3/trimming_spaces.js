/*

In: string
Out: string

Rules:
- You may use bracket notation to access chars by index
- You may not use any other string methods
- Do not remove internal spaces

AL:
- can't even use slice
- start a loop
- set the copy mode to false
- as soon as you approach a character that is not " ", turn the copy mode to true
- And if copy mode is true, you copy each letter into a new string
- concatenate

- start another loop to perform the same opration but this time from right side

*/

function trim(str) {
  let copyMode = false;
  let leftTrimmed = '';
  let rightTrimmed = '';
  let i;
  let j;

  for (i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      leftTrimmed += str[i];
    }
  }

  copyMode = false;

  for (j = leftTrimmed.length - 1; j >= 0; j -= 1) {
    if (leftTrimmed[j] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      rightTrimmed = leftTrimmed[j] + rightTrimmed;
    }
  }

  console.log(rightTrimmed);
}

trim('   abc   ');
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""




















