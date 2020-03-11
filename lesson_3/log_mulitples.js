/*
In: a number (between 0 and 100)
Out: all multiples of the number that are also odd

Rules:
- log the values in descending order

Al:
- declare an var and assign an empty array to it
- start a for loop starting from the given number
  - i = number
  - i <= 100
  - i += number
- inside the loop
  - if i is odd, push it into the array
- reverse array, iterate over it to log all values

*/

function logMultiples(num) {
  let oddMultiples = [];
  let i;

  for (i = num; i <= 100; i += num) {
    if (i % 2 !== 0) {
      oddMultiples.push(i);
    }
  }

  oddMultiples.reverse().forEach(ele => console.log(ele));
}

logMultiples(17);
logMultiples(21);
