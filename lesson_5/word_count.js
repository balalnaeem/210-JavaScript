/*
In: string
Out: object

Rules:
- function should count the occurence of each word
- place that word in the object as key and the number of occurences as value

AL:
- convert the string into an array so we iterate over the words
- on each iteration, check if our object already has the current, word
  - if it does, increment the value by 1
  - if it does not, set it equal to 1

- return the object

*/


function wordCount(string) {
  let resultObj = {};
  let wordsArr = string.split(' ');
  wordsArr.forEach(word => {
    if (resultObj.hasOwnProperty(word)) {
      resultObj[word] += 1;
    } else {
      resultObj[word] = 1;
    }
  });

  return resultObj;
}

console.log(wordCount('box car cat bag box'));

