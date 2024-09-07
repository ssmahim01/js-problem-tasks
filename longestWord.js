// Find the longest word in a given string.

function longWord(str){
    let longestWord = '';
    let currentWord = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === ' ') {
          if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
          }
          currentWord = '';
        }
         else {
          currentWord += char;
        }
      }

      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
    
      return longestWord;
    }

const input = 'I am learning programming to become a programmer';
const find = longWord(input);
console.log(find, ': It is the longest word in a given string.');

// Output => programming : It is the longest word in a given string.