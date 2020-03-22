/*
Implement a function that takes a String as an argument and returns an object that contains a count of the repeated characters.

In: string
Out: object

Rules:
- object contains the count of repeated characters
- objects only contains the count of characters that have a count of 2 or more
- it is also case insensitive

AL:
- first thing we need to do is convert the string to lowercase
- convert the lowecase string into an array of characters
- declare a variable and assign an object literal to it
- iterate over the array with forEach
- insert each charcter into the object, name as keys and counts as values
- then iterate over the keys of the object, if the key has less then 2 as value, delete that key
- return the object

*/

function repeatedCharacters(string) {
  let charsArr;
  let resultObj = {};

  string = string.toLowerCase();
  charsArr = string.split('');
  charsArr.forEach(char => {
    if (resultObj.hasOwnProperty(char)) {
      resultObj[char] += 1;
    } else {
      resultObj[char] = 1;
    }
  });

  Object.keys(resultObj).forEach(key => {
    if (resultObj[key] < 2) {
      delete resultObj[key];
    }
  });

  console.log(resultObj);
}

repeatedCharacters('Programming');
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');