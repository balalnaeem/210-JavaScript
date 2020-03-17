/*
Implement your own version of `Array.prototype.shift`.

In: an array
Out: first element of the array

Rules:
- it mutates the array
- if the array is empty, shift method will return undefined.

AL:
- access the first element of the given array with bracket notation and save it into a variable
- start a for loop to iterate over the array to move the values one index to left, barring from iteratig on one last element.
  - i = 0;
  - i < length - 1;
  - i += 1
- on each iteration assign the value at the next index to the current index
- return the first value that we saved at the satrt

*/

function shift(arr) {
  let firstEle = arr[0];
  let i;

  if (arr.length === 0) return undefined;

  for (i = 0; i < arr.length - 1; i += 1) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return firstEle;
}

console.log(shift([1, 2, 3]));
console.log(shift([]));
console.log(shift([[1, 2, 3], 4, 5]));

var testArray = [1, 2, 3];

console.log(shift(testArray));
console.log(testArray);