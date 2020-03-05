function arrayToString(arr) {
  let string = ''
  let i;
  for(i = 0; i < arr.length; i += 1) {
    string += String(arr[i]);
  }

  return string;
}

console.log(arrayToString([1, 2, 3]));
