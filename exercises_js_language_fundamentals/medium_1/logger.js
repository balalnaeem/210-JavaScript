function debugIT() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIT();