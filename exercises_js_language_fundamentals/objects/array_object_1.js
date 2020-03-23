var myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);

// Lessons Learned:

// arrays are JavaScript Objects.
// so it makes sense when we access a value from array using -1, it does not return the last value of the array, instead it returns undefined, because we have no value defined on that index. It is valid result when trying to access a property valur from an object that has not been defined....