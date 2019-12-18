/*
input: string
output: string

Rules:
  - strip off spaces from both ends
  - do not remove the internal spaces

Al
  - I can start two loops
  - one from the zero index going up every time and checing if the current element is " ", if it is, delete it, if it is not, break the loop
  - update the length of the string
  - second from the last index coming down, doing the same thing the first loop does
  - Find out if there is a method to delete a character at certain index in string
  - It seems easier if we turn the string into an array and then splice the character at certain index and then join the string
  - And the reverse the string and perform the same loop again
  - and then reverse it and join

*/

function trim(string) {
  arrayOfChars = string.split('');
  for(; ;) {
    if (arrayOfChars[0] !== ' ') {
      break;
    }
    arrayOfChars.splice(0, 1);
  }

  arrayOfChars.reverse();

  for(; ;) {
    if (arrayOfChars[0] !== ' ') {
      break;
    }
    arrayOfChars.splice(0, 1);
  }

  return arrayOfChars.reverse().join('');
}

// Examples

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""



















