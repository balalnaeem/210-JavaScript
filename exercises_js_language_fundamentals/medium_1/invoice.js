function invoiceTotal() {
  var total = 0;
  var i;

  for (i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }

  return total;
}

console.log(invoiceTotal(20, 30, 40, 50, 40, 40));