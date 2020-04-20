/*
input: word and a string of text
out: strin of text with the word highlighted

highlighted === **WORD**

algorithm:
- split the string into words
- map over the array of words
  - on each iteration check if the word = given argument word
  - if it is transform it and return it
  - if it is not => return the word the way it is
-join with space and return the string

*/

function highlightWord(word, text) {
  let regex = new RegExp(word, 'ig');
  return text.split(' ').map(string => {
    return regex.test(string) ? `**${string.toUpperCase()}**` : string;
  }).join(' ');
}

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
console.log(highlightWord('sed', text));