function stringToInteger(str) {
  return str.split('').map(chr => Number(chr)).join('');
}

console.log(stringToInteger('4321'));      // 4321
//console.log(stringToInteger('570'));       // 570