/*
*** indexOf ***

input: two strings
output: number

Rule:
- number will represent the index of the second string in the first string if it occurs
- If the second string does not exist in the first string, you will return -1

AL:

- This would be a lot easier with regex
- first, we will add a guard clause that returns -1 if there isn't many match in the given string
- guard clause is working
-

*/

function indexOf(string, substring) {
  regexPattern = RegExp(substring);

  if (!regexPattern.test(string)) {
    return -1;
  }

  return string.match(regexPattern)['index'];
}

// console.log(indexOf('Some strings', 's'));
// console.log(indexOf('Blue Whale', 'Whale'));
// console.log(indexOf('Blue Whale', 'leB'));
// console.log(indexOf('Blue Whale', 'Blute'));



function lastIndexOf(string, substring) {
  regexPattern = RegExp(substring);

  if (!regexPattern.test(string)) {
    return -1;
  }

  startSearchAt = string.length - substring.length;

  for(i = startSearchAt; i >= 0; i -= 1) {
    finishSearchAt = i + substring.length;
    if (string.slice(i, finishSearchAt) === substring) {
      return i;
    }
  }
}
console.log(lastIndexOf('Some strings', 's'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Killer'));
















