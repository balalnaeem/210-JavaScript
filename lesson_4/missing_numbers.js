/*
input: array
ouput: array

Rules:
- find all the missing numbers from the given arrays first through last element

Al:
- declare a function
- intialize an empty array
- start a for loop
  - starting value will the first element
  - stopping value will be the last element
  - incerment by 1
  INSIDE
  - check if he i is included in the given array, continue if yes
  - if not push it into the push it into the new array

- return the new array in the end

*/

function missing(arr) {
  let missingNums = [];
  let startingNum = arr[0] + 1;
  let endingNum = arr[arr.length - 1];

  for(let num = startingNum; num < endingNum; num += 1) {
    if (arr.includes(num)) {
      continue;
    }
    missingNums.push(num);
  }

  return missingNums;
}

console.log(missing([-3, -2, 1, 5]));
console.log(missing([1, 2, 3, 4]));
console.log(missing([1, 5]));
console.log(missing([6]));