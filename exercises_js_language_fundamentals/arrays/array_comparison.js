/*
Input: two arrays
Output: Boolean

RULES:
- if two arrays do not have the same length, return false
- if two arrays have the same length proceed
  - order does not matter
  - if two arrays have the same elements, return true

AL:
- guard clause checkin the lengths of the arrays, return true if not the same
- iterate over one array,
  - on each iteration check if the current element exists in the other array
  - if on any iteration, element does not exist, return false

- otherwise return true

*/

function areArraysEqual(arr1, arr2) {
  let arraysAreEqual = true;
  if (arr1.length !== arr2.length) return false;

  arr1.forEach(ele => {
    if (!arr2.includes(ele)) {
      arraysAreEqual = false;
    }
  });

  if (!arraysAreEqual) return false;

  arr2.forEach(ele => {
    if (!arr1.includes(ele)) {
      arraysAreEqual = false;
    }
  });

  return arraysAreEqual;
}

// console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));
// console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));
// console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));
// console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));
// console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));
// console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));
// console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));
// console.log(areArraysEqual([1, 1, 1], [1, 1]));
// console.log(areArraysEqual([1, 1], [1, 1]));