/*
input: object, string
output: boolean

Rules:
- return true if there is a property name same as the given string
- false otherwise

AL:
- use Object.keys method to get all the keys and then iterate over the array and see if there is any property name same as the given string
*/

function objectHasProperty(obj, str) {
  objKeys = Object.keys(obj);
  return objKeys.includes(str);
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));
console.log(objectHasProperty(pets, 'lizard'));
console.log(objectHasProperty(pets, 'mice'));