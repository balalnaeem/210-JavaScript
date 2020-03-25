/*

In: number
Out: number

Rules:
- return double numbers as is
- if not double number, multiply that number by 2

AL:
- find out if the number is double number
  - we can do that by converting the number to string and cutting the string in half and then comparing it to second half

*/

function twice(number) {
  let string = String(number);
  let firstHalf = string.slice(0, string.length / 2);
  let secondHalf = string.slice(string.length / 2);

  if (firstHalf === secondHalf) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));