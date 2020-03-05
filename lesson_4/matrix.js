// function matrixSums(arr) {
//   let sumsArr = [];
//   let sum;
//   let i;

//   for(i = 0; i < arr.length; i += 1) {
//     sum = 0;
//     arr[i].forEach(ele => sum += ele);
//     sumsArr.push(sum);
//   }

//   return sumsArr;
// }

let reducer = (acc, val) => acc + val;

function matrixSums(arr) {
  return arr.map(subArr => {
    return subArr.reduce(reducer);
  });
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));