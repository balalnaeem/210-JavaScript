/*

input: string
output: object

Rules:
- obj should have chars as keys and their counts as values
- any char that has not been repeated, needs to be discarded
- case insensitivity

AL:
- convert the string to lower case
- then convert that into an array for iteration purposes
- initialize an empty object
- if the char is already in the object, increment the value by one
- iterate over the array, and insert each char as key and 1 as value

- now deletion
- iterate over the object, and delete all the key value pairs where the value is only 1
*/

function repeatedCharacters(string) {
  let charsArray = string.toLowerCase().split('');
  let resultObj = {};

  for(let i = 0; i < charsArray.length; i += 1) {
    let key = charsArray[i];
    if(!(key in resultObj)) {
      resultObj[key] = 0;
    }

    resultObj[key] += 1;
  }

  for(key in resultObj) {
    if(resultObj[key] === 1) {
      delete resultObj[key];
    }
  }

  console.log(resultObj);
}


repeatedCharacters('Programming');
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }