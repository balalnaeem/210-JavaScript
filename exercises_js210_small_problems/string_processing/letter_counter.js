function letterCaseCount(string) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  string.split('').forEach(letter => {
    if (/[a-z]/.test(letter)) {
      result['lowercase'] += 1;
    } else if(/[A-Z]/.test(letter)) {
      result['uppercase'] += 1;
    } else {
      result['neither'] += 1;
    }
  });

  return result;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));