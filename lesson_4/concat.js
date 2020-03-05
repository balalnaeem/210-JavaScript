function concat(arr1, arr2) {
  combinedArr = [];
  for(let i = 0; i < arr1.length; i += 1) {
    combinedArr.push(arr1[i]);
  }

  for(let i = 0; i < arr2.length; i += 1) {
    combinedArr.push(arr2[i]);
  }

  return combinedArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));