function incrementProperty(obj, str ) {
  for (name in obj) {
    if (name === str) {
      obj[str] += 1;
      return obj[str];
    }
  }

  obj[str] = 1;
  return obj[str];
}

var wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));
console.log(wins);
console.log(incrementProperty(wins, 'lucy'));
console.log(wins);