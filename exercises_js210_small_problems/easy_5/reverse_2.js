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