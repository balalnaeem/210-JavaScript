var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// LESSONS

// The key thing to note about function declarations is that they result in the creation of variables with the same name. A function declaration creates variable as well as a function with the same name.

// Recall the hoisting works differently depending on the type of declaration.

// with function declaration, both the function name and the body is hoisted

// whereas with variable declaration, only variable name is hoisted but not the assignment

// although function and variable declarations are both hoisted, function declarations are hoisted first, any succeeding variable declaration with the same name are seen as duplicates and ignored

//
