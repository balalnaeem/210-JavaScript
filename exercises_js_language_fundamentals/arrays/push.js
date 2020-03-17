/*
Define your own version of push.

In: two or more arguments
    - first one will always be an array
    - then there would values that needs to be inserted into that array
Out: length of the new array

Rules:
- This method will be destructive.

AL:
- use `args` to access all the given arguments
- args[0] will always be the array we need to mutate
- the rest will be the values that need to be inserted into the array
- iterate over args using a for loop
  - start the iteration from index 1
  - at the index one of args[0] insert what is at index 1 of args
- if only input is an array, return the length of the given array

*/

function push(...args) {
  for (i = 1; i < args.length; i += 1) {
    args[0][args[0].length] = args[i];
  }

  return args[0].length;
}

var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));
console.log(array);
console.log(push([1, 2], ['a', 'b']));
console.log(push([], 1));
console.log(push([]));