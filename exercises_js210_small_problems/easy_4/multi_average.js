/*

In: array of numbers
Out: string

Rules:
- returning number be rounded to 3 decimals and converted to string

AL:
- build reduce function
- divide the total by length
- round to 3 decimals
- convert to string
- return

*/

let multiplier = function(acc, val) {
  return acc * val;
}

function showMultiplicativeAverage(arr) {
  let sum = arr.reduce(multiplier);
  let average = (sum / arr.length).toFixed(3);
  return String(average);
}

console.log(showMultiplicativeAverage([3, 5]));
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));