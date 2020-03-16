/*
In: array
Out: array

Rules:
- return a new array
- in the new array all duplicate elements must not be

AL:
- declare a new variable and set it equal to an empty array
- iterate over the given array
- on each iteration check if the new array include the current element, if not, push the element into the array
- return the new array

*/

function uniqueElements(arr) {
  let resultArr = [];
  let i;

  for (i = 0; i < arr.length; i += 1) {
    if (!resultArr.includes(arr[i])) {
      resultArr.push(arr[i]);
    }
  }

  return resultArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));