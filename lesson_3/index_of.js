/*

Input: two strings
Output: integer (index of the substring)

Rules:
- first string is where we look for
- second string is what we look for
- wherever the the second string starts in the first string, we return that index
- if the second string does not exist in the first string, we return -1
- it is case sensitive

AL:

slice() can help extract the string
seaerch() can also be helpful

- I can start slicing the string from zero index,
- till the zero + substring length
- and stop the loop at the string length - substring length

*/

function indexOf(str1, str2) {
  let i;
  for (i = 0; i <= str1.length - str2.length; i += 1) {
    if (str1.slice(i, i + str2.length) === str2) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(str1, str2) {
  let i;
  for (i = str1.length - str2.length; i >= 0; i -= 1) {
    if (str1.slice(i, i + str2.length) === str2) {
      return i;
    }
  }

  return -1;
}

