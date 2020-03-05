function join(arr, string) {
  let result = String(arr[0]);
  for(let i = 1; i < arr.length; i += 1) {
    result += string;
    result += arr[i];
  }

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));
console.log(join([1, 2, 3], ' and '));