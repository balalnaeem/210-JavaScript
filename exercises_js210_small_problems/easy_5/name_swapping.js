function swapName(name) {
  let namesArr = name.split(' ');
  let lastName = namesArr.pop();
  return lastName + ', ' + namesArr.join(' ');
}

console.log(swapName('Joe Mug Roberts'));