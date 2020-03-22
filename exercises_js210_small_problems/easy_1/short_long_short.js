function shortLongShort(str1, str2) {
  let shortString;
  let longString;

  if (str1.length < str2.length) {
    shortString = str1;
    longString = str2;
  } else {
    shortString = str2;
    longString = str1;
  }

  return shortString + longString + shortString;
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));