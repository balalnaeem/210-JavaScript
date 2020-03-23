function makeDoubler(caller) {
  return function(num) {
    console.log('This function was called by ' + caller + ' .');
    return num + num;
  };
}

var doubler = makeDoubler('Balal');


console.log(doubler(5));
console.log(doubler(10));