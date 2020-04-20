/*
Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme.

What is staggered capitalization scheme?
- every other character starting from the first should be caps
  - and followed by a either a lowercase or a non-alphabet char
- non-alphabetic chars should not be changed
  - but should be counted as characters to determine when to switch up

In: string
Out: string

Rules:
- non-alphabetic characters, although won't change but will be counted towards the capitalization determination

AL:
- since non-alphabetic chars don't change if we call the method toUppercase to them, we can just lowecase the string and work with index, uppercasing every other letter

- convert the string to lowecased then into chars
- iterate over the chars with map and index
- if the index % 2 === 0, we uppercase the letter
- join and return in the end
*/

function staggeredCase(string) {
  return string.toLowerCase().split('').map((char, idx) => {
    return idx % 2 === 0 ? char.toUpperCase() : char;
  }).join('');
}

// TEST CASES
console.log(staggeredCase('I love Launch School!') === "I LoVe lAuNcH ScHoOl!");
console.log(staggeredCase('ALL_CAPS') === "AlL_CaPs");
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 NuMbErS");

