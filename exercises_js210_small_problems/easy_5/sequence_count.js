/*
In: two integers
  - first argument is count
  - second argument is starting number of a sequence

Out: array

Rules:
- count will always be a number 0 or bigger
- count is the length of our array
- starting number can be any integer positive or negarive

 AL:
 - count will the length of the returning array
 - we can achieve that with a for loop
 - staring from number 1
 - and on each iteration multiply the number with the i
 return the array in the end

 */

 function sequence(count, start) {
  let resultArr = [];
  let i;

  for (i = 1; i <= count; i += 1) {
    resultArr.push(start * i);
  }

  return resultArr;
 }

 console.log(sequence(5, 1));
 console.log(sequence(4, -7));
 console.log(sequence(3, 0));
 console.log(sequence(0, 1000000));