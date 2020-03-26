function trueWordSizes(string) {
  string = string.replace(/[^a-z ]/gi, '');
  return wordSizes(string);
}

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

console.log(trueWordSizes('Four score and seven.'));
console.log(trueWordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(trueWordSizes("What's up doc?"));
console.log(trueWordSizes(''));