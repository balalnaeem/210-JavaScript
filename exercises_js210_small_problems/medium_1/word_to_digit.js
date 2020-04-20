/*
in: string
out: string

Rules:
- in the output string we convert every number word converted to it's digit character.
- spaces and periods stay intact

Algorithm:
- we can create an object that will have keys as number words and values as digits
- we will create an array of every word
- iterate over the keys in object
- if keys include that word we will replace the word with the value
- we can join and return
*/

const NUMBER_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

function wordToDigit(string) {
  return string.match(/\b.+?\b/g).map(word => {
    if (Object.keys(NUMBER_WORDS).includes(word)) {
      return NUMBER_WORDS[word];
    } else {
      return word;
    }
  }).join('') + '.';
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
console.log(wordToDigit('The weight is done.'));