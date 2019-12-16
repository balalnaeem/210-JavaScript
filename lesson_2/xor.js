/*
input: two values either boolean or other
out: boolean

Rules: Return true only if one of the value is true. Otherwise return false

Al:
- We would need to return 'true' for the following two value
    - true, false
    - So basically with logical OR it will return 'true'
    - but with logical AND it will return false
- so we need a function that checks for both and
  - OR returns true and And returns false, we return true
  - otherwise we return false
*/

// Examples

function isXor(a, b) {
  return Boolean(a) !== Boolean(b)
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false