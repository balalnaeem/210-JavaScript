/*
input: string
output: object {}

Rules:
- count the number of occurences of each word in the string
- then that word should be a property name and the numbers of counts should be values in the returning object

AL:

- We are working with a string here
- convert the string into an array first so we can iterate over the string
- well we have now got an array of words in the string
- now we need to be able to count the numbers of each words repetition in the string
- Double forEach loop sounds good so far
- I will perform the forEach on the array once
    - word = current word
    - set count = 0
    - start the second forEach Loop
      - now every time word is equal to outer word we increment the count by 1
      - in order to avoid repetition, we will add an include method security in the first forEach, to skip over words that are already in the object
      - that brings me back to the second for each loop
      - insert the results after the second forEach loop into the object initialized earlier
- return the object
*/


function wordCount(string) {
  let resultObj = {};
  let wordsArr = string.split(' ');

  wordsArr.forEach(word => {
    if (resultObj[word]) {
      resultObj[word] += 1;
    } else {
      resultObj[word] = 1;
    }

  });

  return resultObj;
}

console.log(wordCount('box car cat bag box'));











