/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return (number1 + number2);
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (firstNumber, secondNumber) {
    return (firstNumber - secondNumber);
}
function subtractNumbers() {
    let firstNumber = Number(document.querySelector('#subtract1').value)
    let secondNumber = Number(document.querySelector('#subtract2').value)
    
    document.querySelector('#difference').value = subtract(firstNumber, secondNumber);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

let product = (factor1, factor2) => factor1*factor2;

let multiplyNumbers = () => product(Number(document.querySelector('#factor1').value),Number(document.querySelector('#factor2').value));

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide (dividend, divisor) {
    return (dividend/divisor);
}
function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value)
    let divisor = Number(document.querySelector('#divisor').value)
    
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
