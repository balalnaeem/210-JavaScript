/*

In: floatig point number
Out: string - degrees minutes seconds

Rules:
- degree symbol to represent degrees
- single quote to represent minutes
- double quotes to represent seconds

60 minutes in a degree, 60 seconds in a minute

AL:
- first calculate degrees
- then calulate minutes
- then calculate seconds
- concatenate them all into a string
  - calculate degrees
  - Math.floor the given number

  - calculate minutes
  - num - Math.floor(num) * 60
  - Math.floor that as well

  - calculate seconds
  - minutes - math.floor(minutes)
  - multiply that with 60 and you have seconds

*/

function dms(num) {
  if (num >= 360 || num < 0) {
    num = num > 0 ? num % 360 : 360 + (num % 360);
  }

  let minutes;
  let seconds;

  minutes = (num - Math.floor(num)) * 60;
  seconds = (minutes - Math.floor(minutes)) * 60;

  minutes = Math.floor(minutes);
  seconds = Math.floor(seconds);

  console.log(`${Math.floor(num)}°${padZeroes(minutes)}'${padZeroes(seconds)}"`);
}

function padZeroes(number) {
  var numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"