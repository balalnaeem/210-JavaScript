/*
Input: 2 arrays
Output: array

Rules:
- function should return a new array that contains the values from each othe original array

AL:
- declare a variable and assign an empty array to it
- iterate over the first array, and push all elements into the empty array
- iterate over the second array and push all elements into the empty array
- return the empty array which is not empty by now hehe

*/

function concat(arr1, arr2) {
  let resultArr = [];
  let i;

  for(i = 0; i < arr1.length; i += 1) {
    resultArr.push(arr1[i]);
  }

  for(i = 0; i < arr1.length; i += 1) {
    resultArr.push(arr2[i]);
  }

  return resultArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));