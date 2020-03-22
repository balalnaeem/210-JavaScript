function copyProperties(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  obj1Keys.forEach(key => obj2[key] = obj1[key]);
  return obj1Keys.length;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};

console.log(copyProperties(hal, sal));
console.log(sal);