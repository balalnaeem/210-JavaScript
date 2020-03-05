function pop(arr) {
  let lastElement = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastElement;
}

var count = [1, 2, 3];
console.log(pop(count));
console.log(count);