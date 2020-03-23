var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  var hours;
  var minutes;

  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  minutes = deltaMinutes % MINUTES_PER_HOUR;

  return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}


var MILISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  var midnight = new Date('1/1/2001 00:00');
  var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILISECONDS_PER_MINUTE);
  var hours = padWithZeroes(afterMidnight.getHours(), 2);
  var minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return hours + ':' + minutes;
}























