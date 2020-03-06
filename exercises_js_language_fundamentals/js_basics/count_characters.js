function charCounter() {
  let rlSync = require('readline-sync');
  let phrase = rlSync.question('Please enter a phrase: ');

  let noSpaces = phrase.replace(/[^a-z]/gi, '');

  console.log(`There are ${noSpaces.length} in the "${phrase}".`);
}

charCounter();