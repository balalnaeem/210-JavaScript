/*
input: string
output: object

Rules:
- object will contain the following three properties
  1. percentage of characters in the string that are lowercase
  2. percentage of characters in the string that are uppercase
  3. percentage of characters that not alphabet

PROBLEM:
- space will be considered non-alphabet characters
- input string will always have one character
- percentages will be strings, and will be fixed to 2 points decimals

- for 'abCdef 123'
  - 5 lowercase characters = 50.00
  - 1 uppercase character = 10.00
  - 4 non-alphabet character = 40.00
  - total 10 characters

algorithm:
- I can define helper methods
  - a method that will count the number of lowercase letters in a string
  - a method that will count the number of uppercase letters in a string
  - a method that will count the number of non-aplhabet characters in a string
- find out the percentages by dividing by string length and multiply with 100
- fixed the percentages to 2 point decimals
- have them converted to strings
- insert them as values in the object

(I actually dont need to define three methods. I can just use string replace to get rid of the characters I am not counting.)
*/

function letterPercentages(string) {
  let lowerCaseCount = string.replace(/[^a-z]/g, '').length;
  let upperCaseCount = string.replace(/[^A-Z]/g, '').length;
  let neitherCount = string.replace(/[a-z]/gi, '').length;

  let lowerPercentage = lowerCaseCount / string.length * 100;
  let upperPercentage = upperCaseCount / string.length * 100;
  let neitherPercentage = neitherCount / string.length * 100;

  return {
    lowercase: String(lowerPercentage.toFixed(2)),
    uppercase: String(upperPercentage.toFixed(2)),
    neither: String(neitherPercentage.toFixed(2)),
  }
}
// TEST CASES
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
console.log(letterPercentages('A'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }
console.log(letterPercentages('a'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }
console.log(letterPercentages(' '));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
