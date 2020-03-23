function invoiceTotal() {
  var total = 0;
  var i;

  for (i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }

  return total;
}

console.log(invoiceTotal(20, 30, 40, 50, 40, 40));

// LESSONS

// In JavaScript, it is possible to pass more or less arguments to a function than are explicitly defined by it's parameters. And we can access those arguments with the `arguments` object that is available inside functions.

