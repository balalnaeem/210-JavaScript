/*
In: 2 values (arr, val)
Out: number (first index at which the value is found in the array)

Rules:
- if the value is not present in the array, return -1;

AL:
- declare a varibale assign -1 to it
- ietrate over the array with the help of for loop
- on each iteration, check if the current value is equal to the given value
- if it is, set the variable equal to i and break out of loop
- in the return that value

*/

function indexOf(arr, val) {
  let index = -1;
  let i;

  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(indexOf([1, 2, 3, 4], 3));
console.log(indexOf([1, 2, 3, 4], 5));