function oddElementsOf(arr) {
  oddIndexed = [];
  for(let i = 1; i < arr.length; i += 2) {
    oddIndexed.push(arr[i]);
  }

  return oddIndexed;
}

var digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));