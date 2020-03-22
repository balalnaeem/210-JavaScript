let today = new Date();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


function dateSuffix(date) {
  if (date === 11 || date === 12) {
    return date + 'th';
  } else if (date % 10 === 1) {
    return date + 'st';
  } else if (date % 10 === 2) {
    return date + 'nd';
  } else if (date % 10 === 3) {
    return date + 'rd';
  } else {
    return date + 'th';
  }
}

// console.log(`Today is ${daysOfWeek[today.getDay()]}, ${today.getMonth()} ${dateSuffix(today.getDate())}.`);

// console.log(today.getTime());

console.log(today.getHours());
