/*
A triangle is classified as follows:
  - equilateral : All three sides are equal
  - isosceles : two sides are equal length and the third is different
  - scalene : all three sides are  of different length

To be a valid triangle:
  - the sum of the lengths of two shortest sides, must be greater than the longest side
  - and everyside must have a length greater than 0
  - if either of these conditions is not satisfied, triangle is invalid

input: 3 number (lengths of the three sides of a triangle)
output: 'equilateral' || isosceles || scalene || invalid

Problem:
- assuming we will always be given three values as input
- define a max function that selects the max value
- define a min function that selects a min value
- define a function that sums up the values
- find out the third value by sum - min = max
- now we have all three values and we know which one is which
  - first check validity
    - none of them can be 0
    - sum of min and middle > max
      return invalid if does not pass these tests
- if passes these tests
  - check for equilatera
    if min === middle and min === max
    return equilateral
- if not equilateral check for isosceles
  - where min === middle || max === middle
- return scalene otherwise


*/
let validTri = (max, min, mid) => {
  return min > 0 && (min + mid > max);
}

function triangle(num1, num2, num3) {
  let perimeter = num1 + num2 + num3
  let maxLength = Math.max(num1, num2, num3);
  let minLength = Math.min(num1, num2, num3);
  let midLength = perimeter - maxLength - minLength;

  if (!validTri(maxLength, minLength, midLength)) {
    return 'invalid';
  }

  if (maxLength === minLength && minLength === midLength) {
    return 'equilateral';
  }

  if (maxLength === midLength || midLength === minLength) {
    return 'isosceles';
  }

  return 'scalene';
}

// TEST CAES
console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
