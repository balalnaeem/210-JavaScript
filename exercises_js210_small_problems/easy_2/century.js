function century(year) {
  let century = Math.floor((year - 1) / 100) + 1;

  if (century % 10 === 1 && century % 100 !== 11) {
    return century + 'st';
  } else if (century % 10 === 2 && century % 100 !== 12) {
    return century + 'nd';
  } else if (century % 10 === 3 && century % 100 !== 13) {
    return century + 'rd';
  } else {
    return century + 'th';
  }
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
