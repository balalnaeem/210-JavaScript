/*
Input: two strings (a string, a delimiter)
output: log strings broken at the provided delimiter

Rules:
- if there is no delimiter provided, log an Error: No delimiter
- if delimiter is an empty string, log each character individually
- if delimiter is provided, but it does not exist in the string, log the string, the way it is
- if there is a delimiter at the start of the string, log an empty line
- if there is a delimiter at the end of the line, don't log anything

AL:
- Guard clause: if the delimiter is undefined, we log an error

- find out length of the string
- intialize an empty string - which will be our temporary string
- start a for loop
- iterate over the characters in the string, checking if each char is delimiter
- if it is not delimiter, add the char to temporary string
- when the char is delimiter, log the temp string, clear it

WHAT IF THE STRING IS ''?

- when we check for whether the char is delimiter, we also add a condition if it is an empty string

Logic is a bit all over the place, but I am going to start witing code.

*/

function splitString(str, delimiter) {
  let i;
  let tempStr = '';

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  for (i = 0; i < str.length; i += 1) {
    if (str[i] !== delimiter) {
      tempStr += str[i];
    } else if (str[i] === delimiter) {
      console.log(tempStr);
      tempStr = '';
    }

    if (i === str.length - 1 && str[i] !== delimiter) {
      console.log(tempStr);
    } else if (delimiter === '') {
      console.log(tempStr);
      tempStr = '';
    }
  }
}

splitString('abc,123,hello world', ',');
splitString('hello');
splitString('hello', '');
splitString('hello', ';');
splitString(';hello;', ';');










