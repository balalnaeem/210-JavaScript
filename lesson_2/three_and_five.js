/*
  input: nothing
  output: all from the number from 1 till 100 inclusive
          that are multiples of 3 and 5
          if a number is multiple of both 3 and 5
            that number will be appended '!';

  Al:
  -declare a function
    - for loop
      - initialize i = 1;
      - condition i <= 100;
      - increment by 1

      - conditional statement
        if i % 3 === 0 && i % === 5
          log i
        else if i % 5 === 0
          log i
        else of i % 3 === 0
          log i
        else
          continue
        end
*/

function multiplesOfThreeAndFive(start, end) {
  for(let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + '!');
    } else if (i % 5 === 0 || i % 3 === 0) {
      console.log(String(i));
    } else{
      continue;
    }
  }
}

multiplesOfThreeAndFive(50, 100);