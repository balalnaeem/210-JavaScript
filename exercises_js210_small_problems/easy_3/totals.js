/*
RUNNING TOTAL
--------------

In: array
Out: array
Rules:
- returning array has same number of elements
- each number is the running total of the numbers upto that point
- always an array of numbers

AL:
- declare a variable and set it to reference an empty array
- declare a variable and set it to reference number zero
- start a for loop
  - i = 0
  - i < arr.length
  - i += 1
- on each iteration add the current number to the running total variable and push that total into the new empty array
- return the new array

*/

// function runningTotal(arr) {
//   let resultArr = [];
//   let runningTotal = 0;
//   let i;

//   for (i = 0; i < arr.length; i += 1) {
//     runningTotal += arr[i];
//     resultArr.push(runningTotal);
//   }

//   return resultArr;
// }

function runningTotal(arr) {
  let total = 0;
  return arr.map(num => total += num);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));