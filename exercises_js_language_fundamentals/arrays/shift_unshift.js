function shift(array) {
  var result;

  if (array.length !== 0) {
    result.array.splice(0, 1).pop();
  }
}

function unshift(array) {
  var i;
  for (i = 1; i < arguments.length; i += 1) {
    array.splice(i - 1, 0, arguments[i]);
  }

  return array.length;
}