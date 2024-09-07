// Count how many times the number is repeated in the array.

function countNumber(numbers, find){
let count = 0;
numbers.forEach(num => {
    if (num === find) {
        count++;
    }
  });
    return count;
}

const arrayNumbers1 = [5, 6, 11, 12, 98, 5];
const find1 = 5;
console.log(countNumber(arrayNumbers1, find1));

const arrayNumbers2 = [5, 6, 11, 12, 98, 5];
const find2 = 25;
console.log(countNumber(arrayNumbers2, find2));

// First output is 2 => The number of 5 is repeated the two times.

// Second output is 0 => The number of 25 is repeated zero times rather it has not exist in an array.