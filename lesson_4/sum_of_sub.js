/*

In: an array (a nested one)
Out: an array (each element is the sum of sub arrays)

- so the length wise the input array and output array will be same

AL:
- We have to iterate over the nested array with a map (find out if map is destructive)
- use reduce at each iteration and return the cumulative value

*/

let reducer = (acc, val) => acc + val;

function matrixSums(arr) {
  return arr.map(sub => sub.reduce(reducer));
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));