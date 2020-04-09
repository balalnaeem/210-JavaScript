/*
In: array
Out: number

Problem:
- we go over the array
- same number of times as the length of the array
- on each iteration we add one more element to the summing
- return the grand sum in the end

AL:
- defined a reducer function
- start a for loop
- on each iteration
  - we slice the array from 0 to one plus i
  - we reduce the sliced array and add it's sum to the grand total
- we return the grand total in the end
*/

let sum = (acc, val) => acc + val;
// function sumOfSums(array) {
//   let total = 0;
//   let start = 0;
//   let i;
//   for (i = 0; i < array.length; i += 1) {
//     total += array.slice(start, i + 1).reduce(sum);
//   }

//   return total;
// }

function sumOfSums(array) {
  return array.map((num, idx) => {
    return array.slice(0, idx + 1).reduce(sum);
  }).reduce(sum);
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));