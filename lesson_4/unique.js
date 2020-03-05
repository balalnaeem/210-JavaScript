/*
input: arr
output: arr

Rules:
- remove the duplicate elements from the given array

Al:
- declare a function
- initiate a new variable set it equal to an empty array
- for loop
- if the current element of the array is already in the new array, continue
- else insert that into the new array

*/

function uniqueElements(arr) {
  uniqueArr = [];
  arr.forEach(ele => {
    if (uniqueArr.includes(ele)) {
      return;
    }
    uniqueArr.push(ele);
  });

  return uniqueArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));