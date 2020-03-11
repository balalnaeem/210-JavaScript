function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

var a;
var b;

a = 'outer';
b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);



