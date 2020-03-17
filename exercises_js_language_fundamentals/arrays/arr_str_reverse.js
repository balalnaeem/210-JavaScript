/*

Implement your own version of `Array.prototype.reverse`.

In: a string or an array
Out: reversed and new copy of the string or array

Rules:
- not destructive
- we are getting either a string or an array
- so there has to be two different ways of reversal
- one for array or one for array
- or we can convert the string into array and then reverse the array
- and while returning, check what it was and then return accordingly.

Al:
- declare a variable isArray
- set it equal to true if the argument is array, false if the argument is string
- if it is false, convert the string into an array
- start a for loop
  - start iterating from the last element
  - save them into a new array
- now is the initial argument was string, join the array
- if it was an array, return the new array the way it is

*/

function reverse(input) {
  let reversedArr = []
  let isArr = Array.isArray(input);
  let newArr;

  if (!isArr) {
    newArr = input.split('');
  } else {
    newArr = input;
  }

  for (i = newArr.length - 1; i >= 0; i -= 1) {
    reversedArr.push(newArr[i]);
  }

  if (isArr) return reversedArr;
  return reversedArr.join('');
}

console.log(reverse('Hello'));
console.log(reverse('a'));
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([]));

var array = [1, 2, 3];
console.log(reverse(array));

console.log(array);




