/*
In: array
Out: array

Rules:
- returning array should have all the elements from the given array in the same order
- and all the elements in the reversed order

AL:

BRUTE FORCE
-----------

- declare a variable and assign empty array to it
- start for loop, copy all elements in to the array
- start another for loop, this time backwards, copy all the elements
- return the new array

SMART WAY
---------

- slice the original array
- reverse aother sliced copy
- combine them together
- return the new array

*/

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

function mirroredArray(arr) {
  let resultArr = [];
  let i;

  for (i = 0; i < arr.length; i += 1) {
    resultArr.push(arr[i]);
  }

  for (i = arr.length - 1; i >= 0; i -= 1) {
    resultArr.push(arr[i]);
  }

  return resultArr;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(mirroredArray(digits));

console.log(digits);