function objectHasProperty(obj, property) {
  return obj.hasOwnProperty(property);
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));