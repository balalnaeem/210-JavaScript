function swapLetterCase(letter) {
  if (!(/[a-z]/i).test(letter)) {
    return letter;
  } else if (letter.toLowerCase() === letter) {
    return letter.toUpperCase();
  } else {
    return letter.toLowerCase();
  }
}

function swapCase(string) {
  return string.split('').map(letter => swapLetterCase(letter)).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"