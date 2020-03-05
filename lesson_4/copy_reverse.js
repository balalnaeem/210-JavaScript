function mirroredArray(arr) {
  let newArr = arr.slice();
  for(let i = newArr.length - 1; i >= 0; i -= 1) {
    newArr.push(newArr[i]);
  }

  return newArr;
}

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

console.log(mirroredArray(letters));