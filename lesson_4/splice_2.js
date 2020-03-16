/*

Input: 3 values (arr, startIndex, number of values)
Out: array (copied values)

Rules:
- function should start removing values from the specified index from original array
- remove the number of values specified
- and return removed values in a new array
- *** THIS FUNCTION MUTATES THE ORIGINAL ARRAY

AL:
*/

function splice(arr, startIndex, number) {
  let removedValues = [];
  let i;

  for (i = startIndex; i < arr.length; i += 1) {
    if (i < startIndex + number) {
      removedValues.push(arr[i]);
    }

    arr[i] = arr[i + number];
  }

  arr.length = arr.length - removedValues.length;
  return removedValues;
}


