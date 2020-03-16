/*

Implement your own version of Array.prototype.concat.

In: an array and (an array or a value)
Out: an array

Rules:
- return a new array that is composed of
  - all values from the first array argument
  - and all values from the second array argument OR value argument

- first argument will always be an array
- second argument can be either an array or a value
- function will return a new array
- the order should be preserved
- the function should copy and object references into the new arra
  - which means if there are any changes made to the object, those changes shoudl show up in the reference array
- function should copy the values of the primitive values

AL:
- first thing i need to do is check if the second argument is array or not
- if not, then I just push in the value into the array, and return the array
Lets try that.

*/

function concat(array1, secondArg) {
  let newArr = array1.slice();

  if (Array.isArray(secondArg)) {
    secondArg.forEach(ele => newArr.push(ele));
  } else {
    newArr.push(secondArg);
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([1, 2], 3));
console.log(concat([2, 3], ['two', 'three']));
console.log(concat([2, 3], 'four'));

var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
console.log(newArray);
obj.a = 'two';
console.log(newArray);

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);

console.log(arr3);

obj.b = 'three';

console.log(arr3);

arr3[5].b = 3;

console.log(obj);
































