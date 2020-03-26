function interleave(arr1, arr2) {
  let combinedArr = [];
  let i;

  for (i = 0; i < arr1.length; i += 1) {
    combinedArr.push(arr1[i], arr2[i]);
  }

  return combinedArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));