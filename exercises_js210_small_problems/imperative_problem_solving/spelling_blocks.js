/*
PROBLEM:
- A collection of spelling blocks has two letters per block
  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M

- only words you can spell are
  - that do not use both letters
  - and only use a block once

a function that takes a word string as an argument
  - returns true, if the word can be spelled with the above rules
  - returns false otherwise
  - letters are case insensitive

in: string
out: boolean

algorithm:
- what data structure am I going to use?
  - an object makes sense
- or I can have two arrays
  - first group
  - second group

- convert the string to lowercase array of letters
- iterate over the array, on each iteration insert the index of current letter in LETTERS into used indices
- it any step index is already present in the array, return false
- return true in the end
*/
const LETTERS = "abcdefghijklmnopqrstuvwxyz";

function isBlockWord(string) {
  let usedIndices = [];
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i += 1) {
    let currentCharIndex = LETTERS.indexOf(string[i]) % 13;
    if (usedIndices.includes(currentCharIndex)) return false;
    usedIndices.push(currentCharIndex);
  }

  return true;
}

console.log(isBlockWord('BATCH'));
console.log(isBlockWord('BUTCH'));
console.log(isBlockWord('jest'));
console.log(isBlockWord('bxdcp'));
console.log(isBlockWord('bgvxrl'));

















