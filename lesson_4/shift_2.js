/*
Input: array
Out: val at the 0 index

Rules:
- removes the first value from the array
- modifies the array
- returns the removed value

AL:
- save the value at 0 index in a variable
- iterate over the array with the help a for loop
- on each iteration set the value at the current index same as the next index
- by doing that we will set the last element equal to undefined
- and then we set the length equal to one less and the undefined value will be lost in the limbo for ever and ever

*/

function shift(arr) {
  let first = arr[0];
  let i;

  if (array.length === 0) {
    return undefined;
  }

  for (i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return first;
}

let count = [];

console.log(shift(count));

console.log(count);