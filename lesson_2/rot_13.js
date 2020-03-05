let smallLetters = [];
let capitalLetters = [];

const startLowerCode = 97;
const endLowerCode = 122;

const startUpperCode = 65;
const endUpperCode = 90;

for(let ascii = startLowerCode; ascii <= endLowerCode; ascii += 1) {
  smallLetters.push(String.fromCharCode(ascii));
}

for(let ascii = startUpperCode; ascii <= endUpperCode; ascii += 1) {
  capitalLetters.push(String.fromCharCode(ascii));
}

function rot13(string) {
  let newLetters = string.split('').map(letter => {
                      let index = smallLetters.indexOf(letter.toLowerCase());
                      if (index === -1) {
                        return letter;
                      } else if (smallLetters[index] === letter) {
                        return smallLetters[(index + 13) % 26];
                      } else {
                        return capitalLetters[(index + 13) % 26];
                      }
                    });

  return newLetters.join('');
}
