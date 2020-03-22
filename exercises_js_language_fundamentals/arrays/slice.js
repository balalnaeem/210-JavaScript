/*
Your own version of `Array.protoype.slice`.
-----

In: 1) array
    2) begin index (number)
    3) end index

Out: new array

Rules:
- new array would have the extracted elements from the original array
- starting from begin index up to but not including end index
- this function does not mutate the original array
- if the values of begin or end index is greater than the length of the array, set it equal to the length

AL:

- a guard clause to check begin or end index is not greater than the length of the array
- if it is, set it equal to length
- declare new variable and set it equal to an empty array
- start a for loop that would start from begin index and end before the end index
- on each iteration copy each element at the current index into the new array
- at the end return the new array

*/

function slice(arr, begin, end) {
  let resultArr = [];
  let i;

  if (begin > arr.length) {
    begin = arr.length;
  } else if (end > arr.length) {
    end = arr.length;
  }

  for (i = begin; i < end; i += 1) {
    resultArr.push(arr[i]);
  }

  return resultArr;
}


// console.log(slice([1, 2, 3], 1, 2));
// console.log(slice([1, 2, 3], 2, 0));
// console.log(slice([1, 2, 3], 5, 1));
// console.log(slice([1, 2, 3], 0, 5));

let arr = [1, 2, 3];
console.log(slice(arr, 1, 3));
console.log(arr);

























