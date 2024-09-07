// Count the number of vowels in a string.

function countVowels(string){
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of string){
        if(vowels.includes(char)){
            count++
        }
    }
    return count;
}

const sentence = 'I am a web developer';
const count = countVowels(sentence);
console.log('The', count, 'number of vowels in a string.');

// Output => The 8 number of vowels in a string.