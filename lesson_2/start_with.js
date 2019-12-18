function startsWith(string, searchString) {
  let length = searchString.length;
  let slicedString = string.split('').slice(0, length).join('');
  return slicedString === searchString;
}

var str = 'We put comprehension and mastery above all else';

console.log(startsWith(str, 'We'));
console.log(startsWith(str, 'We put'));
console.log(startsWith(str, ''));
console.log(startsWith(str, 'put'));

var longerString = 'We put comprehension and mastery above all else!';

console.log(startsWith(str, longerString));

