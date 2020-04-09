/*
Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

In: string
Out: array

AL:
- split the string into an array
- map over the array
  - on each iteration slice from the original string
  - starting from zero and ending at 1 + index
*/

function substringsAtStart(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

console.log(substringsAtStart('abc'));
console.log(substringsAtStart('a'));
console.log(substringsAtStart('xyzzy'));