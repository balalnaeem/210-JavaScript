/*
without using recursion

- lets say we are finding out the 5th fibbonacci number
1st                                     = 1
2nd                                     = 1
3rd = 1 step previous + 2 step previous = 2 (1 + 1)
4th = 1 step previous + 2 step previous = 3 (2 + 1)
5th = 1 step previous + 2 step previous = 5 (3 + 2)


*/

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  let previous = 1;
  let current = 1;
  let next;
  let counter = 0;

  while (counter < n - 2) {
    next = previous + current;
    previous = current;
    current = next;
    counter += 1;
  }

  return current;
}

console.log(fibonacci(100));
// console.log(fibonacci(50));
// console.log(fibonacci(75));