/*
PROBLEM:
- we are given an odd number
- lets say the number is 5
- we need to output the following:

  *      = 2 spaces 1 diamond
 ***     = 1 spaces 3 diamond
*****    = 0 spaces 5 diamonds
 ***     = 1 spaces 3 diamonds
  *      = 2 spaces 1 diamond

diamonds [1,3,5,3,1]
spaces   [2,1,0,1,2]

incrementer for diamonds = 2
  unless the diamonds was equal to n then it is -2
incrementer for spaces = -1
  unless spaces were 0 then it is 1

algorithm:
- initial diamonds = 1
- initial spaces = Math.floor(n / 2)
- output = spaces + diamonds
- iterate n times
  - calculate output = initial spaces + initial diamonds
  - increment diamonds
  - increment spaces

*/

function diamond(n) {
  let diamonds = 1;
  let spaces = Math.floor(n / 2);
  let diamondsIncrementer = 2;
  let spacesIncrementer = -1;
  let output;
  let i;

  for (i = 0; i < n; i += 1) {
    ouput = ' '.repeat(spaces) + '*'.repeat(diamonds);
    console.log(ouput);

    if (diamonds === n) diamondsIncrementer *= -1;
    if (spaces === 0) spacesIncrementer *= -1;

    diamonds += diamondsIncrementer;
    spaces += spacesIncrementer;
  }
}

diamond(9)
























