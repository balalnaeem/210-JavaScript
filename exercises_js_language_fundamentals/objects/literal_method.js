let person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
}

console.log(person.firstName + ' ' + person.lastName);

// Just like functions, objects literal methods must be called by appending parentheses in order to be executed.

// functions are first class object so referencing a function without parentheses will return the function itself not the string representation.