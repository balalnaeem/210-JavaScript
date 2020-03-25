/*
In: string
out: string

Rules:
- resulting string should replace non alphabetic characters with spaces
- there should be only one consecutive space in resulting string
- if there are more than one alphabetic chars in row, they should be replaced by only space

AL:
- check out the string replace method
- use replace on all the non alphabetic chars
- and then iterate over the sting to remove the spaces

*/

function cleanUp(string) {
  string = string.replace(/[^a-z]/ig, ' ');
  let i;
  let result = '';

  for (i = 0; i < string.length; i += 1) {
    if (string[i] === ' ' && string[i + 1] === ' ') {
      continue;
    }

    result += string[i];
  }

  return result;
}

// BETTER ONE

function cleanUp(string) {
  return string.replace(/[^A-Z]+/gi, " ");
}

console.log(cleanUp("---what's my +*& line?"));