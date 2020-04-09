/*
In: array
Out: array

AL:
- we can map over the array with flatMap
- on each iteration
  - empty array
  - set array's length = usb[1]
  - fill that with sub[0]
  - return that
*/

function buyFruit(array) {
  let tempArr = [];
  return array.flatMap(sub => {
    tempArr.length = sub[1];
    tempArr.fill(sub[0]);
    return tempArr;
  });
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));