function slice(arr, startIndex, endIndex) {
  let newArr = [];
  let counter = 0;
  let i;
  for(i = startIndex; i < endIndex; i += 1) {
    newArr[counter] = arr[i];
    counter += 1;
  }

  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));