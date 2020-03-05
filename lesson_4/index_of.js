function indexOf(arr, ele) {
  for(let i = 0; i < arr.length; i += 1) {
    if (arr[i] === ele) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));