/*
Implement your own version of `Array.prototype.splice`.

The `splice` function changes the contents of an array by deleting existing elements, or by adding new elements.
-----

In: 1) array
    2) start index
    3) deleteCount
    4) zero or more elements to be added

Out: new array (containing the deleted elements)
               (empty array if no elements were deleted)

Rules:
- function removes `deleteCount` number of elements from the array, beginning at the start index
- if any optional elements are provided, splice adds them to the array at the start index
- if value of start is greater than the length of the array, set it equal to the length.
- if value of deleteCount is greater than the number of elements from the start of the array up to the end, set deleteCount to the difference between the arr.length and the start
- if no elements are to be added, splice only removes the elements from the array
- MUTATES

AL:
- check if you can use ...args for optional elements


*/

COME BACK TO IT AGAIN!!

// console.log(splice([1, 2, 3], 1, 2));
// console.log(splice([1, 2, 3], 1, 3));
// console.log(splice([1, 2, 3], 1, 0));
// console.log(splice([1, 2, 3], 0, 1));
// console.log(splice([1, 2, 3], 1, 0, 'a'));

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));
console.log(splice(arr, 1, 0, 'a'));
console.log(arr);


















