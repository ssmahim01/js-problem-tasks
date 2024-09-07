// Generate a random number between 10 to 20.

function getRandomNumber(min, max){
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

const generateRandom = getRandomNumber(10, 20);
console.log(generateRandom);

// Generated a random number between 10 to 20.