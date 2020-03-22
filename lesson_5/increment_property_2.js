function incrementProperty(obj, property) {
  if (obj[property]) {
    obj[property] += 1;
  } else {
    obj[property] = 1;
  }

  return obj[property];
}

var wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));
console.log(wins);

console.log(incrementProperty(wins, 'lucy'));
console.log(wins);