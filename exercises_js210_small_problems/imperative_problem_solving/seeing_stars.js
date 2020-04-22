/*
8 pointed star
nxn grid

if n = 7
*  *  *      - 4 spaces 3 stars (0 space at the start 2 space in between)
 * * *       - 3 spaces 3 stars (1 space at the start 1 space in between)
  ***        - 2 spaces 3 stars (2 space at the start 0 space in between)
*******      - 0 spaces 7 stars (0 space at the start 0 space in between)
  ***        - 2 spaces 3 stars (2 space at the start 0 space in between)
 * * *       - 3 spaces 3 stars (1 space at the start 1 space in between)
*  *  *      - 4 spaces 3 stars (0 space at the start 2 space in between)

total spaces start at n - 3 = 4
if n was 9 it would be = 6

total spaces [4, 3, 2, 0, 2, 3, 4]
  - total spaces are divided between spaces at start and spaces in between
                 [4, 3, 2, 0, 2, 3, 4]
space at start   [0, 1, 2, 0, 2, 1, 0]
space in between [2, 1, 0, 0, 0, 1, 2]

output = spaceAtStart + stars + spacesBetween + stars + spacesBetween + stars

total spaces = n - 3
toal spaces at start = 0
total spaces in between = total - at start / 2

total spaces decrement
spaces at start increment
spaces in between = total - at start / 2

total decrement
at start increment
spaces in between total - at start / 2

if midpoint total spaces = 0;
stars = n

then word backwards from there

*/

function star(n) {
  let totalSpaces = n - 3;
  let spaceAtStart = 0
  let spacesBetween = (totalSpaces - spaceAtStart) / 2;
  let midpoint = Math.floor(n / 2);
  let output;
  let i;

  for (i = 0; i < midpoint; i += 1) {
    output = ' '.repeat(spaceAtStart) + '*' +
             ' '.repeat(spacesBetween) + '*' +
             ' '.repeat(spacesBetween) + '*';
    console.log(output);

    totalSpaces -= 1;
    spaceAtStart += 1;
    spacesBetween = (totalSpaces - spaceAtStart) / 2;
  }

  console.log('*'.repeat(n));

  for (i = 0; i < midpoint; i += 1) {
    totalSpaces += 1;
    spaceAtStart -= 1;
    spacesBetween = (totalSpaces - spaceAtStart) / 2;

    output = ' '.repeat(spaceAtStart) + '*' +
             ' '.repeat(spacesBetween) + '*' +
             ' '.repeat(spacesBetween) + '*';
    console.log(output);
  }
}




























