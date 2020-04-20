/*
in: string of words
out: array of words with their lengths joined with a space

rules:
- empty string or no arguments should return an empty array

algorithm:
- guard clause for no argument should return empty array
- split the string into words array
- map over the array
- on each iteration return the words and words.length joined by a space

*/

function wordLengths(string) {
  if (string === undefined || string === '') return [];
  return string.split(' ').map(word => word + ' ' + word.length);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'))
//["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]);

console.log(wordLengths('Supercalifragilisticexpialidocious'))
// ["Supercalifragilisticexpialidocious 34"]
console.log(wordLengths('')); // [];
console.log(wordLengths()); // [];