/*
In: two values (boolean or others)
Out: boolean

Rules:

Program should true, only and if only one of the values is truthy. It should return false otherwise.

AL:
- Only way we find out that one of the given values is truthy if && comparison returns false but || comparison returns true

Do these both comparisons and make sure they are both true with &&

*/

function isXor(a, b) {
  return !!((a || b) && !(a && b));
}

console.log(isXor(false, 3));
console.log(isXor('a', undefined));
console.log(isXor(null, ''));
console.log(isXor('2', 23));
