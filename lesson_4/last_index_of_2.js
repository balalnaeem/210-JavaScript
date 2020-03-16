function lastIndexOf(arr, val) {
  let index = -1;
  let i;

  for (i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === val) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));
console.log(lastIndexOf([1, 2, 3], 4));