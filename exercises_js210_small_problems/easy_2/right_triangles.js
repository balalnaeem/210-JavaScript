/*
In: number
Out: log out a right triangle of star char

Rules:
- first line starts with one star and is preceded with spaces that are one less than the number
- as you go down, number of spaces go down, and stars go up

AL:
- we going to need some sort of looping mechanism
- lets just start coding

*/

function triangle(number) {
  let stars;
  let spaces = number - 1;

  for (stars = 1; stars <= number; stars += 1) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
    spaces -= 1;
  }
}

triangle(9);