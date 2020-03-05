function randomNumber(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}

randomNumber(2, 5);