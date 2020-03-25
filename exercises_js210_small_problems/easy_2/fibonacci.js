/*

calculate and return the index of first fibonacci number that has the number of digits specified by the argument.

In: number
Out: number

Rules:
- index of the first fibonacci with the same digits as the argument
- index of the first fibonacci number is 1

Al:
- develop logic to calculate the fibonacci numbers
- and as you are calcuating the fib numbers
- on each iteration, convert the number to a string and check if the length of that string is equal to argument, if it is return the index of that fib number

*/

function findFibonacciIndexByLength(num) {
  let index = 1;
  let currentFib;
  let length;

  while (true) {
    currentFib = fibonacci(index);
    length = currentFib.toString().length;
    if (length === num) break;
    index += 1;
  }

  return index;
}

function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 2) + fibonacci(num - 1);
}

console.log(findFibonacciIndexByLength(2));
console.log(findFibonacciIndexByLength(10));