/*
In: two arrays
Out: one array

RULES:
- multiply each num from the first array with every num in the second array
- result array should be sorted in ascending numeric order

AL:
- we need an empty array that we will return in the end
- we would would need two layers of forEach
- on each inner iteration insert the result of the product into the empty array
- return the empty array in the end sorted numerically
*/

function multiplyAllPairs(array1, array2) {
  let resultArr = [];
  array1.forEach(num1 => {
    array2.forEach(num2 => {
      resultArr.push(num1 * num2);
    });
  });

  return resultArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));