// fibonacci.js

function fibonacci(number) {
  if (number < 2) {
    return number;
  } else {
    fibonacci(number -1) + fibonacci(number - 2)
  }
}