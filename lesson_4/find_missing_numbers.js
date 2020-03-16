/*
Input: array (sorted, of integers)
Output: array (sorted, of integers)

Rules:
- Output array will have all the missing integers between first and last element in the input array

AL:
- declare a varibale and assign an empty array to it
- iterate over the numbers starting from, and not including the smallest number, and till and not including the last number
- if on each iteration, the number does not exist in the input array, push that fucker into the new array
- return the new array at the end

*/

function missing(arr) {
  let resultArr = [];
  let i;

  for (i = arr[0]; i < arr[arr.length - 1]; i += 1) {
    if (!arr.includes(i)) {
      resultArr.push(i);
    }
  }

  return resultArr;
}

console.log(missing([-3, -2, 1, 5]));
console.log(missing([1, 2, 3, 4]));
console.log(missing([6]));