/*
In: two arrays
Out: array

*/

function multiplyList(arr1, arr2) {
  let resultArr = [];
  let i;

  for (i = 0; i < arr1.length; i += 1) {
    resultArr.push(arr1[i] * arr2[i]);
  }

  return resultArr;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));