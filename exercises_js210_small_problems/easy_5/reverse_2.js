function reverseBigWords(string) {
  let wordsArr = string.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });

  return wordsArr.join(' ');
}

console.log(reverseBigWords('Professional'));
console.log(reverseBigWords('Walk around the block'));
console.log(reverseBigWords('Launch School'));

var reaction = 'negative';

switch (reaction) {
  case 'positive':
    console.log('It is positive.');
    break;
  case 'negative':
    console.log('It is negative.');
    break;
  default:
    console.log('It is all the same');
}