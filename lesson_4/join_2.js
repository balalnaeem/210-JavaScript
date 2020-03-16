/*
JOIN
----

In: two arguments (an array, a string)
Out: string

Rules:
- function should coerce each value in the array into a string
- and join those values together using the second argument
- return the joined string

AL:
- basically we need iterate over the array
- convert the current element into a string
- concatenate the second argument to it
- on last iteration skip concatenating the second argument

*/

function join(arr, joiner) {
  let resultString = '';
  let i;

  for (i = 0; i < arr.length; i += 1) {
    resultString += arr[i];
    if (i === arr.length - 1) continue;
    resultString += joiner;
  }

  return resultString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));
console.log(join([1, 2, 3], ' and '));