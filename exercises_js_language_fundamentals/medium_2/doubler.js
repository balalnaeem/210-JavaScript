function makeDoubler(caller) {
  return function(num) {
    console.log('This function was called by ' + caller + ' .');
    return num + num;
  };
}

var doubler = makeDoubler('Balal');


console.log(doubler(5));
console.log(doubler(10));

// The solution leverages the fact that functions in js are first class functions. You can pass them as arguments to other functions and even return them from inside the other functions.

