/*

In: two arrays
Out: one array

Rules:
- the output array should have it's odd indexed elements from the second input array and even indexed elements from the first array

AL:
- Need to over both given arrays
- start a for loop
- inside the loop check if the index is even or odd
- based on that condition push from appropriate array
*/

function combinedArray(even, odd) {
  let resultArr = [];
  let i;

  for(i = 0; i < even.length; i += 1) {
    resultArr.push(even[i]);
    resultArr.push(odd[i]);
  }

  return resultArr;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(combinedArray(digits, letters));