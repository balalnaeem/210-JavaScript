/*

Write a function that will take a short line of text, and write it to the console log within a box.

In: string
Out: string output in banner form

Rules
- first line = starts with and ends with '+' sign and '-' in between
- second line = starts with and ends with '|' and empty in between
- third line: starts and ends with '|' and text in between
- fourth line = second line
- fifth line = first line

AL:
- find out length of the string
- first line will have the that many = 2 '-' chars and '+' at the start and end
- second line with have that many + 2 spaces and '|' at the start and end so on and so forth

- But how do we multiply a charcter for that many times in javascript?

we can use string.prototype.repeat

*/

function logInBox(string) {
  let horizontalRule = '+' + '-'.repeat(string.length + 2) + '+';
  let emptyLine = '|' + ' '.repeat(string.length + 2) + '|';

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log('| ' + string + ' |');
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has gone before.');
logInBox('')