/*

Input: 2 string
Ouput: boolean

Rules:
- if str1 starts with the given str2, we return true, false otherwise.
- what that mean is:
  - all chars of str2 should exist at the start of str1
  - starting from index 0 of course

- if the str2 is an empty string, we return true

AL:

guard clause
  - if str2 is an empty string, return true

- find out length of the string2
- slice a copy from str1 from start of the same length ==>
- and then see if str1 and str2 are equal

HOW DO WE SLICE A COPY
 - we can use slice method, give it 0 as first argument, and length of string 2 as the second argument
- since slice method works in a way that it finishes copying before the second argument index provided, that will be perfect, since our second argument is length, which is always one more than the last index.

*/

function startsWith(string, searchString) {
  if (searchString === '') {
    return true;
  }

  if (string.slice(0, searchString.length) === searchString) {
    return true;
  }

  return false;
}

var str = 'We put comprehension and mastery above all else';

console.log(startsWith(str, 'We'));
console.log(startsWith(str, 'We put'));
console.log(startsWith(str, ''));
console.log(startsWith(str, 'put'));

var longerString = 'We put comprehension and mastery above all else!';

console.log(startsWith(str, longerString));











