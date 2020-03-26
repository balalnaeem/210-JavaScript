/*
In: string
Out: object

Rules:
- count the letters in words
- the count of letters will be the keys
- and number of words with that many letters will be values

AL:
- convert the string into an array of words
- iterate over the words
- on each iteration count the number of letters in the current word
- if the object has the key with the same length, we increment the value of that key by 1
- if it does not have that key, we set it equal to 1
- return the object in the end

*/

function wordSizes(string) {
  if (string === '') return {};

  let counterObj = {};
  let size;
  string.split(' ').forEach(word => {
    size = word.length;
    counterObj[size] = counterObj[size] || 0;
    counterObj[size] += 1
  });

  return counterObj;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));