let myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
}

myObject[1];
myObject[a];
myObject.a;

// The expression `myObject[a]` raises a Reference Error.

// To access the value of a property using bracket notation, the operand inside the bracket that references the property name (key) must be a string value.

// If the operand is a number JS converts that into a string
// If operand is variable, JS looks up the value of the variable then using it as key to get the value of the property

// The expression myObject[a] raises a Reference error because JS cant find the value of variable a since it has not been declared.

