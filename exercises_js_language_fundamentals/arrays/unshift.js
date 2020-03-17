/*
Unshift
-------

In: an array and one or more elements
Out: number (length of the modified array)

Rules:
- add one or more elements to the start of the array
- returns the new length

AL:
- find out how many elements are there you need to insert at the start of the array (args.length - 1)
- change the length of the arr (arr.length = arr.length + number of elements to add)
- start a for loop from the finish
  - i = arr.length - 1
  - i >= 0
  - i -= 1

- on each iteration
  - arr[i] = arr[i - number of elements]

- start another for loop
  i = 0;
  i < args.length - 1
  i += 1

On each iteration:
  - arr[0] = args[i + 1]
*/

function unshift(...args) {
  let numberOfElements = args.length - 1;
  args[0].length = args[0].length + numberOfElements;
  let i;

  for (i = args[0].length - 1; i >= 0; i -=1) {
    args[0][i] = args[0][i - numberOfElements];
  }

  for (i = 0; i < args.length - 1; i += 1) {
    args[0][i] = args[i + 1];
  }

  return args[0].length;
}

console.log(unshift([1, 2, 3], 5, 6));
console.log(unshift([1, 2, 3]));
console.log(unshift([4, 5], [1, 2, 3]));

var testArray = [2, 3];
console.log(unshift(testArray, 5));
console.log(testArray);











