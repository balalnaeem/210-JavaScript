/*

Write a function that creates and returns a new array from its array argument. The new array should contain all values from the argument array whose positions have an odd index.

In: array
Out: array

Rules:
- resulting array should have all the elements that were present in the first array at odd indexes

AL:

I could go about it in the following two ways:
  1) I could simply use a for loop
  2) I could use the filter method

Lets first solve it with a for loop:
- declare a variable and assign an empty array to it
- start a for loop and iterate over the given array
- only iterate over the odd indexes
- on each iteration copy the elements into the empty array
- return the new array


function oddElementsOf(arr) {
  let resultArr = [];
  let i;

  for (i = 1; i < arr.length; i += 2) {
    resultArr.push(arr[i]);
  }

  return resultArr;
}

*/

function oddElementsOf(arr) {
  oddIndexElements = arr.filter(ele => {
    if (arr.indexOf(ele) % 2 !== 0) return true;
  });
  return oddIndexElements;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));