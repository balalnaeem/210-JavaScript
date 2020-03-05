let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(arr, regex) {
  let matched = arr.filter(word => regex.test(word) );
  console.log(matched);
}

allMatches(words, /lab/);