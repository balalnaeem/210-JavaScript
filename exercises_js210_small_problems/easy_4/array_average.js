function average(arr) {
  let sum = arr.reduce((acc, val) => acc + val);
  return Math.floor(sum/arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));