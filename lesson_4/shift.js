function shift(arr) {
  let firstElement = arr[0];
  for (let i = 0; i < arr.length - 1; i += 1) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length -1;
  return firstElement;
}

var count = [1, 2, 3];

console.log(shift(count));

console.log(count);