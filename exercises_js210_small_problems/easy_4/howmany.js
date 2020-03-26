function countOccurrences(arr) {
  let counterObj = {};
  arr.forEach(ele => {
    if (counterObj[ele]) {
      counterObj[ele] += 1;
    } else {
      counterObj[ele] = 1;
    }
  });

  for (key in counterObj) {
    console.log(`${key} => ${counterObj[key]}`);
  }
}

var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);