// A function of convert temperature from Celsius to Fahrenheit.

function celToF(cel){
    const fahrenheit = cel * 9;
    const divide = fahrenheit / 5;
    const result = divide + 32;
    return result; 
}

const fResult = celToF(1);
console.log(fResult, '°F.');

// The output is 33.8 °F.