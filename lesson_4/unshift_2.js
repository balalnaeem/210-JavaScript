/*
Unshift
-------

In: 2 values (arr, val)
Out: number (new length)

Rules:
- function should insert the number at the beginning of the array
- and return new length

AL:
- change the length of the array to +1
- declare a new variable currentVal
- declare another variable newVal
- start for loop
  - inside the loop
  - insert the new val at the current index
  - and the current value at the next index
- at the end return new length

*/

function unshift(arr, newVal) {
  arr.length = arr.length + 1;
  let currentVal;
  let i;

  for (i = 0; i < arr.length; i += 1) {
    currentVal = arr[i];
    arr[i] = newVal;
    newVal = currentVal;
  }

  return arr.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));
console.log(count);