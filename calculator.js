const firstVariable = "";
const operatorSymbol = "";
const secondVariable = "";
const operatorCheck = ['/', '*', '-', '+'];
let shouldReset = false;
/*logic:
    1. put all the numbers and operators into an array
    2. use some sort of method to find either * or /
    3. get indexOf that * or / of the array
    4. the two operands are one minus that index and one plus that index
    5. all calculations should be done after all the numbers and operators are put in
*/

let operationArray = ""; //array to store the inputs the user selects

const display = document.querySelector('.display');

//selection and function for when the number buttons are pressed

let temp = "";
const numbersPressed = document.querySelectorAll('.numbers');
numbersPressed.forEach((numberPressed) => {
    numberPressed.addEventListener('click', () => {
        if (shouldReset) {
            temp = "";
            shouldReset = false;
        }
        display.textContent += numberPressed.value;
        temp = display.textContent;
        //pushes each individual numbers into array will store only single digit per index
    });
});

//need to figure out what to do with the display so that if the operator is pressed the second time
//the firstVariable will be the solved number and the second variable will be the new inputted one

const operatorsPressed = document.querySelectorAll('.operator');
operatorsPressed.forEach((operatorPressed) => {
    operatorPressed.addEventListener('click', () => { 
        if (!display.textContent.includes('/' || '*' || '-' || '+')) {
            firstVariable = temp;
        }
        else {
            secondVariable = temp;
            //firstVariable = operate(firstVariable, operatorSymbol, secondVariable);
        }
        display.textContent += operatorPressed.value;
        operatorSymbol = operatorPressed.value; //pushes each individual operator into array does not check for error
        shouldReset = true;
    });
});

function clear() {
    const clearDisplay = document.querySelector('#clear');
    clearDisplay.addEventListener('click', () => {
        display.textContent = "";
        firstVariable = ""; //clears the contents of operationArray by setting length to 0
        operatorSymbol = "";
        secondVariable = "";
    });
}


function operate(firstVariable, operatorSymbol, secondVariable) {
    if (operatorSymbol === '+') {
        add(firstVariable, secondVariable);
    }
    else if (operatorSymbol === '-') {
        subtract(firstVariable, secondVariable);
    }
    else if (operatorSymbol === '*') {
        multiply(firstVariable, secondVariable);
    }
    else if (operatorSymbol === '/') {
        divide(firstVariable, secondVariable);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

