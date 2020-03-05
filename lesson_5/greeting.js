function greetings(arr, obj) {
  resultString = arr.join(' ') + '! ';
  resultString += `Nice to have a ${obj.title} ${obj.occupation} around.`
  console.log(resultString);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });