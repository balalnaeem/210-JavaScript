let lowerCaseLetters = []
let upperCaseLetters = []

for(let i = 97; i <= 122; i += 1) {
  lowerCaseLetters.push(String.fromCharCode(i));
}

for(let i = 65; i <= 90; i += 1) {
  upperCaseLetters.push(String.fromCharCode(i));
}

function transformIndex(index) {
  if (index > 25) {
    return index % 13;
  } else {
    return index;
  }
}

function rot13(string) {
  let index;
  let new_letters = string.split('').map(letter => {
                      if (lowerCaseLetters.includes(letter)) {
                        index = lowerCaseLetters.indexOf(letter) + 13;
                        index = transformIndex(index);
                        return lowerCaseLetters[index];
                      } else if (upperCaseLetters.includes(letter)) {
                        index = upperCaseLetters.indexOf(letter) + 13;
                        index = transformIndex(index);
                        return upperCaseLetters[index];
                      } else {
                        return letter;
                      }
                    });

  return new_letters.join('');
}

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// Logs : Teachers open the door, but you must enter by yourself.
