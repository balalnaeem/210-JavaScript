/*

In: string and number(possibly)
Out: string or undefined

Rules:
- if the give number is 0 return an empty string
- if the given number is any other value than a positive integer, return undefined
- those values could be:
  - -1
  - 'a'
  - false
  - null
  - ' '

AL:
- guard clause
  - if the number is not an integer and if it is but not a positive integer, return undefined.

- declare variable and assign empty string to it
- start a for loop and work our way downwards
  - i = times
  - i > 0
  - i -= 1
  - at each iteration, concatenate a copy of the string into empty string

-log the final string in the end



*/

function repeat(string, times) {
  let resultString = '';
  let i;

  if (!Number.isInteger(times) || times < 0) {
    console.log(undefined);
    return;
  }

  for (i = times; i > 0; i -= 1) {
    resultString += string;
  }

  console.log(resultString);
}

repeat('abc', -1);
repeat('abc', 'a');
repeat('abc', false);
repeat('abc', null);
repeat('abc', '  ');
repeat('abc', 1);
repeat('abc', 2);
repeat('abc', 0);















