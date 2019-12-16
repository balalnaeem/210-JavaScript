/*
  input: a number
  out: log all the multiples of the given number between 0 and 100
        that are also odd numbers

  Rules: Log the values in descending order

  AL:
  - declare a function
    - for loop
      - initialize i = 100
      - condition i >= 1 1
      - decrement by 1

    - if i is divisible by number, log the number or go to the next iteration
*/

function logMultiples(num) {
  for (let i = 100; i >= num; i--) {
    if (i % num === 0 && i % 2 !== 0){
      console.log(i);
    }
  }
}

logMultiples(21);