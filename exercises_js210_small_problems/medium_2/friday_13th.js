/*
setMonth
getDay

input: year (number)
output: number (number of friday the 13ths)

Problem:
- each year, we need to go over each month, checing what day is the date 13th
- count the number of times the day is friday (5)
- we are going to set an initial date of 13 of January that year
- and then using setMonth keep adding a month into our date

algorithm:
- declare a variable that will hold the month number
- declare a variable that will count the number of fridays
- initialize a date object, with the given year, Jan, 13
- start a while loop
  - while the month is < 12
  set month to the month value
  getDay form the date object
    if day is 5, add 1 to the counter
  increment the month variable
- return the counter
*/

function fridayThe13ths(year) {
  let unluckyDays = 0;
  let day = 13;
  let month= 0;
  let date = new Date(year, month, day);

  while (month < 12) {
    if (date.getDay() === 5) {
      unluckyDays += 1;
    }

    month += 1;
    date.setMonth(month);
  }

  return unluckyDays;
}

console.log(fridayThe13ths(2017));