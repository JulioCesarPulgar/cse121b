/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

/* Function Declaration - Addition Feature */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Declaration - addNumbers Feature */
function addNumbers() {
    const add1Value = parseFloat(document.getElementById("add1").value);
    const add2Value = parseFloat(document.getElementById("add2").value);
    const sum = add(add1Value, add2Value);
    document.getElementById("sum").value = sum;
}

/* Event Listener for addNumbers Button */
document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtraction Feature */
const subtract = function(number1, number2) {
    return number1 - number2;
};

/* Function Expression - subtractNumbers Feature */
const subtractNumbers = function() {
    const subtract1Value = parseFloat(document.getElementById("subtract1").value);
    const subtract2Value = parseFloat(document.getElementById("subtract2").value);
    const difference = subtract(subtract1Value, subtract2Value);
    document.getElementById("difference").value = difference;
};

/* Event Listener for subtractNumbers Button */
document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiplication Feature */
const multiply = (number1, number2) => number1 * number2;

/* Arrow Function - multiplyNumbers Feature */
const multiplyNumbers = () => {
    const factor1Value = parseFloat(document.getElementById("factor1").value);
    const factor2Value = parseFloat(document.getElementById("factor2").value);
    const product = multiply(factor1Value, factor2Value);
    document.getElementById("product").value = product;
};

/* Event Listener for multiplyNumbers Button */
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Function Declaration - Division Feature */
function divide(dividend, divisor) {
    return dividend / divisor;
}

/* Function Declaration - divideNumbers Feature */
function divideNumbers() {
    const dividendValue = parseFloat(document.getElementById("dividend").value);
    const divisorValue = parseFloat(document.getElementById("divisor").value);
    const quotient = divide(dividendValue, divisorValue);
    document.getElementById("quotient").value = quotient;
}

/* Event Listener for divideNumbers Button */
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Event Listener for Get Total Due Button */
document.getElementById("getTotal").addEventListener("click", function() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const isMember = document.getElementById("member").checked;
    const discount = isMember ? 0.2 : 0;
    const total = subtotal - (subtotal * discount);
    document.getElementById("total").innerHTML = `Total: $${total.toFixed(2)}`;
});

/* Array Methods - Functional Programming */
const sourceArray = Array.from({ length: 13 }, (_, i) => i + 1);

/* Output Source Array */
document.getElementById("array").innerHTML = `Source Array: [${sourceArray.join(", ")}]`;

/* Output Odds Only Array */
const oddsArray = sourceArray.filter(num => num % 2 === 1);
document.getElementById("odds").innerHTML = `Odd Numbers: [${oddsArray.join(", ")}]`;

/* Output Evens Only Array */
const evensArray = sourceArray.filter(num => num % 2 === 0);
document.getElementById("evens").innerHTML = `Even Numbers: [${evensArray.join(", ")}]`;

/* Output Sum of Org. Array */
const sumOfArray = sourceArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfArray").innerHTML = `Sum of Source Array: ${sumOfArray}`;

/* Output Multiplied by 2 Array */
const multipliedArray = sourceArray.map(num => num * 2);
document.getElementById("multiplied").innerHTML = `Source Array Times Two: [${multipliedArray.join(", ")}]`;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultipliedArray = multipliedArray.reduce((acc, num) => acc + num, 0);
document.getElementById("sumOfMultiplied").innerHTML = `Sum of Source Array Times Two: ${sumOfMultipliedArray}`;
