function lastIndexOf(arr, ele) {
  for(let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === ele) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));
console.log(lastIndexOf([1, 2, 3], 4));