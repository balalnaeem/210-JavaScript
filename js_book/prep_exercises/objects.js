let objToCopy = {
  foo: 1,
  bar: 2,
}

arr =[1, 2];

function copyObj(obj, arr) {
  let newObj = {};

  if (arr === undefined) {
    newObj = Object.create(obj);
  } else {
    arr.forEach(ele => {
      newObj[ele] = obj[ele];
    });
  }
  return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined