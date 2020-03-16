/*
Input: 2 values (arr, startIndex, endIndex)
Out: array

Rules:
- do not modify the original array
- returning array would be a new array
- end index is not inclusive

AL:
- declare a variable assign an empty array to it
- iterate over the given array with the help of the for loop
- start the iteration from the given startIndex
- end the iteration when you reach the endIndex
- on each iteration, copy the current element into the resultArray
- return the result array

*/

function slice(arr, startIndex, endIndex) {
  let resultArray = [];
  let i;

  for (i = startIndex; i < endIndex; i += 1) {
    resultArray.push(arr[i]);
  }

  return resultArray;
}

console.log(slice([1, 2, 3, 4, 5], 0, 7));
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));