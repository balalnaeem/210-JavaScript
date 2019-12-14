function factorial(n) {
  var product = 1; // B
  for (var i = 1; i <= n; i++) {
    product *= i;
  }

  return product; // A
}

console.log(factorial(5));