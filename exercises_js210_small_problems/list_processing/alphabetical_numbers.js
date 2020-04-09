/*
Write a function that takes an array of integers between 0 and 19, and returns an array of those integers sorted based on the English word for each number:

In: array
Out: array

Rules:
- return array should be sorted based on the english words of the respective integers

AL:
- define a constant that has the equivalent english words in an array
  - accessible by index value of the same
- define a sort function that compares based on the equivalent english words
- when we sort our array pass the sort method as callback
*/

const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(array) {
  return array.sort((a, b) => {
    if (NUM_WORDS[a] < NUM_WORDS[b]) {
      return -1;
    } else if (NUM_WORDS[a] > NUM_WORDS[b]) {
      return 1;
    } else {
      return 0;
    }
  });
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
