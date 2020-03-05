function lastNOf(arr, count) {
  if(count > arr.length) {
    return arr.slice();
  }
  let arrCopy = arr.reverse();
  arrCopy.length = count;
  return arrCopy.reverse();
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 8));