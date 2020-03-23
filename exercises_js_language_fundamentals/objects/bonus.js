function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));
console.log(calculateBonus(1000, false));
console.log(calculateBonus(50000, true));

// LESSONS

// While there are no explicit parameters defined for the function, there are still arguments that are available locally within the function.

// function have an arguments object that is available locally

// the arguments objects contains an entry for every object passed to the function.

