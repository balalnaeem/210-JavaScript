/*
Input: 2 values (arr, val)
Output: number (new array length)

Rules:
- append the second argument to the end of the array
- return the new length of the array

AL:
- simply use length as the argument and [] operator can assign the given value to the end

*/

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

let count = [0, 1, 2];

console.log(push(count, 3));

console.log(count);