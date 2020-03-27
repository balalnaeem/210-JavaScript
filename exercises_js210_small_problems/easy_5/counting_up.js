function sequence(num) {
  let resultArr = [];
  let i;

  for (i = 1; i <= num; i += 1) {
    resultArr.push(i);
  }

  return resultArr;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));