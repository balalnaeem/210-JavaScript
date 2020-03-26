function halvsies(arr) {
  let middle = Math.ceil(arr.length / 2);
  return [arr.slice(0, middle), arr.slice(middle)];
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));