function penultimate(string) {
  return string.split(' ').slice(-2, -1);
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

// Since arrays are JS objects. So when we try to access a value in the array with negative integer, it does not return value counting from the last element of the array. Instead it checks if any of the array property has a key(index) that is a negative integer. If such property is not defined in the array, it returns undfined. Just like if we try to access a property from an object with a key name that is not defined, we will get undefined.


// LESSONS

// In JS, unlike some other programming languages, using negative index to access an array does not extract elements from the end, nor does it raise an error. Instead performing such an action usually returns undefined.

// In JavaScript, arrays are objects.