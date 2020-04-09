/*
In: string
Out: array of all the substrings

Rules:
- order the returned array based on where in string the substring exists
- for example substring that being at index 0, come before the substring that begin at index 1

AL:
- an empty array that will be our result array
- iterate over the split string
- on each iteration slice the string at current index and pass it to the leading substring method and then concat the resulting array with our array
*/
function substringsAtStart(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  let allSubs = [];
  str.split('').forEach((_, idx) => {
    allSubs = allSubs.concat(substringsAtStart(str.slice(idx)));
  });

  return allSubs;
}

function substrings(str) {
  return [...str].flatMap((_, idx) => substringsAtStart(str.slice(idx)));
}

console.log(substrings('madam'));