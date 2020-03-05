function copyProperties(obj1, obj2) {
  let count = 0;
  for (key in obj1) {
    obj2[key] = obj1[key];
    count += 1;
  }

  return count;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};

console.log(copyProperties(hal, sal));

console.log(sal);