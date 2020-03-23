var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;
  var counter = 0;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
    counter += 1;
  }

  return sum / counter;
}

console.log(average(myArray));

// LESSONS

// an array property with a key of anything other than a non-negative integer is not counted towards the length of the array.

// so in the above example length of the array is 2 instead of 4 as the user expected.