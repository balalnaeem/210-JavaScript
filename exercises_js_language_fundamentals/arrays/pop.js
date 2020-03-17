/*
Your own version of 'pop' method.

In: array
Out: last element of the array

Rules:
- function will remove the last element of the array and return that element
- if array is empty, we return undefined

AL:
- declare a varible and assign last element of the array to it
- we get the last element of the array with index length - 1
- once we have that, set the length of the array equals to length - 1
and return that element

*/

function pop(arr) {
  let lastElement;
  if (arr.length === 0) return undefined;

  lastElement = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastElement;
}

var array = [1, 2, 3];
console.log(pop(array));
console.log(array);
console.log(pop([]));
console.log(pop([1, 2, ['a', 'b', 'c']]));
