/*
In: two arrays
Out: array

Rules
- combine both arrays
- there should be no duplicates in the combined array
- even if there are duplicates in the original array

AL:
- declare a variable and set it to reference an empty array
- iterate over the first array with help of a for loop
- on each iteration check if the currrent element is in the array already,
- if it is, continue
- if not, push the current element into the result array
- same for the second array
- return the new array

*/

function union(arr1, arr2) {
  let combinedArr = [];
  let bothArr = arr1.concat(arr2);
  let i;

  for (i = 0; i < bothArr.length; i += 1) {
    if (combinedArr.includes(bothArr[i])) {
      continue;
    }

    combinedArr.push(bothArr[i]);
  }

  return combinedArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));