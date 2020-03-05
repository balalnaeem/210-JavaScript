function unshift(arr, val) {
  arr.reverse();
  arr.push(val);
  arr.reverse();
  return arr.length;
}

let count = [1, 2, 3];

unshift(count, 0);

console.log(count);