/*
Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case.

non-alphabetic chars should still be included in the output string, but not counted towards determinig the staggered case

algorithm:
- declare a variable upper = true
- convert into lowercase
- split into chars
- map over the array
  - on each iteration, check if the letter is part of the family of alphabets
    - if its't just return the letter
    - if it is
      - we check whether upper is true or not
        - change the boolean value as well
        - if true, uppercase the letter
        - if not return it as it is
- join and return in the end
*/

function staggeredCase(string) {
  let upper = true;
  return string.toLowerCase().split('').map(char => {
    if (!char.match(/[a-z]/i)) return char;

    if (upper) {
      upper = false;
      return char.toUpperCase();
    } else {
      upper = true;
      return char;
    }
  }).join('');
}


console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");