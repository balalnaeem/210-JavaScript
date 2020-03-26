/*
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

In: string
Out: string

Edge case:
- one letter words

AL:
- split the string into array for iteration
- we split at ' '
- now we have an array of words available
- on each iteration, for each word
- we will have for loop
  - for loop will add the last character of the word to the string
  - then start iterating from index 1 and copy chars
  - and at the last iteration will add the first char
- then the word gets added to the string

OR

- we can map the words array
- on each iteration, slice the last char, then slice the middle part, and slice the first char and add them all together

YES

*/

function swap(str) {
  if (str.length === 1) return str;
  return str.split(' ').map(word => {
    return word[word.length - 1] + word.slice(1, -1) + word[0];
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));