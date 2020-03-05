function push(arr, ele) {
  arr[arr.length] = ele;
  return arr.length;
}

let count = [0, 1, 2];
push(count, 3)
console.log(count);