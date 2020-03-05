let today = new Date();

function dateSuffix(date) {
  let result = String(date);
  if (date === 1 || date === 21) {
    result += 'st';
  } else if (date === 2 || date === 22) {
    result += 'nd';
  } else if (date === 3 || date === 23) {
    result += 'rd';
  } else {
    result += 'th';
  }

  return result;
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date)

  let resultString = 'Today\'s date is ' + day + ', ' + month + ' ';
  resultString += dateSuffix(date.getDate());

  console.log(resultString);
}

console.log(today.getMinutes());


















