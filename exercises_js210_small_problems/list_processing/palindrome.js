/*
In: string
Out: array

Rules:
- case sensitive
- all letters count
- duplicates should be included

AL:
- get all the substrings with the help of my methods
- then filter the array checking whether its a palindrom
- you can check
  - str === [...str].reverse().join('')

*/


function substringsAtStart(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return [...str].flatMap((_, idx) => substringsAtStart(str.slice(idx)));
}

function palindromes(str) {
  let allSubs = substrings(str);
  return allSubs.filter(sub => {
    return sub === [...sub].reverse().join('') && sub.length > 1;
  });
}


console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));
