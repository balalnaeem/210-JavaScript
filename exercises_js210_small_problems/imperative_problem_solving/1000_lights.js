/*
1000 Lights

You have a bank of switches in front of you
  - number from 1 to n
  - every switch is initially off

  - you walk through the switches, iterate over them
  - and toggle their state, as in change from 'off' to 'on'

  - and then start at the beginning again, iterate over them
  - but this you only toggle every second 2nd, 4th, 6th and so on

  - and then you iterate over them again
  - but this time you only toggle every third 3rd, 6th, 9th and so on

you continue making rounds until you have made n rounds
in the end return the numbers that are still on

[off, off, off, off, off] - before any iteration
after first iteration --> [on, on, on, on, on]  --incrementer is 1
after second iteration -->[on, off, on, off, on] --incrementer is 2
after third iteration --> [on, off, off, off, on] -- increment is 3
after fourth iteration -->[on, off, off, on, on] -- increment is 4
after 5th iteration -->   [on, off, off, on, off] -- increment is 5

in: number
out: array of numbers

algorithm:
- we start a for loop that iterates for n times
  - inside we can launch another loop
  - this loop is incremented by incrementer
  incrementer is incremented before the start of the second loop each time
  - and on each iteration it toggles the state of the current switch --> FUNCTION
  - we can just iterate over the array and insert the on indices + 1 to the new array
- return the new array
*/

function toggleState(arr, index) {
  arr[index] = arr[index] ? false : true;
}

function lightsOn(switches) {
  let i;
  let j;
  let incrementer = 0;
  let onArr = [];
  let lightsArr = new Array(switches).fill(false);

  for (i = 0; i < lightsArr.length; i += 1) {
    incrementer += 1;
    for(j = i; j < lightsArr.length; j += incrementer) {
      toggleState(lightsArr, j);
    }
  }

  lightsArr.forEach((light, index) => {
    if (light) onArr.push(index + 1);
  });

  return onArr;
}

console.log(lightsOn(5));
console.log(lightsOn(100));














