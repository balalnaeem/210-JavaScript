/*
bubble sort is a sorting algorithm
  - bubble sort works by making multiple passes through an array
  - on each pass two values of consecutive elements are compared
  - if the first value is greater than the second, the two elements are swapped,
  - this process is repeated untill a complete pass is made without making swaps
  - at which point the array is completely sorted

input: array
output: sorting should be done in place
        - return the sorted array

rules:
- expect at least wo elements in an arary
- sort the array in place (modify the array)

PROBLEM:
- say we have an array [3, 6, 2, 7]
- we are goind to go over the array and see if the first element is greater than the second element
- first = 3
- next = 6
- 3 is not greater than the 6, so we leave them in place
- next we check if 6 is greater than 2, which it is, we swap their places
- array becomes [3, 2, 6, 7] -- array has been swapped once
- now we check if 6 is greater than 7, it is not, so we leave them be
- we do not check for the last element [3, 2, 6, 7]
one iteration is complete, we start the second iteration
perform the same comparisons in the second iteration
- we keep going over the array until there are no swaps
- then we return the sorted array

algorithm:
- we start a do while loop
  - condition is whether swaps variable is true
  - inside the while, start a for loop
    - for loop will iterate over the array
    - on each check if the current element of the array is greater than the next element
    - if it is, it will swap the values
    - set the swaps variable to true
*/

function bubbleSort(arr) {
  let swapped;
  let current;
  let next;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i += 1) {
      current = arr[i];
      next = arr[i + 1];
      if (current > next) {
        arr[i] = next;
        arr[i + 1] = current;
        swapped = true;
      }
    }
  } while(swapped);
}


var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);























