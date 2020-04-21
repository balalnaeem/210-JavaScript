/*
A triangle is classfied as follows:
  1. Right: One angle is right angle (exactly 90 degrees)
  2. Acute: All three angles are less than 90 degrees
  3. Obtuse: One angle is greater than 90 degrees

To be a valid triangle:
  - sum of all angles must be equal to 180
  - and every angle must be greater than 0

input: 3 number (angles)
output: right || acute || obtuse || invalid

Problem:
  - you may assume that all angles have integer values, no floating points
AL:
- sort the values assign smalles, biggest, and middle angles to the values
- check validation,
  sum === 180
  smallest > 0
  return invalid
- if biggest > 90
  return obtuse
- if biggest === 90
  return right
- return acute

*/

function triangle(...angles) {
  let [smallest, middle, biggest] = angles.sort((a, b) => a - b);
  let sum = smallest + middle + biggest;

  if (sum !== 180 || smallest <= 0) return 'invalid';
  if (biggest > 90)                 return 'obtuse';
  if (biggest === 90)               return 'right';
  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"