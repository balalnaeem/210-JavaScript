function pop(arr) {
  let last = arr[arr.length - 1];
  arr.length = arr.length -1;
  return last;
}

let count = [1, 2, 3];
console.log(pop(count));
console.log(count);