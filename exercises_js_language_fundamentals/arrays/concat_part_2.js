/*

build a concatenate function that can take two more arrays or values and return an array of all of them concatenated

In: 2 or more arrays or objects
Out: an array

AL:
- access all the arguments passed to the function with arguments object
- iterate over the elements of the array and see if they are an array or a value
- I could use the function that I built in the previous exercises

*/

function concat(...args) {
  let newArr = [];

  args.forEach(ele => {
    if (Array.isArray(ele)) {
      ele.forEach(ele => newArr.push(ele));
    } else {
      newArr.push(ele);
    }
  });

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(concat([1, 2], 'a', ['one', 'two']));
console.log(concat([1, 2], ['three'], 4));