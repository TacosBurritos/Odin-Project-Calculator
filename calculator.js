let firstVariable = "";
let operatorSymbol = "";
let secondVariable = "";
let equalPresent = false;
const operatorCheck = ['/', '*', '-', '+'];
let shouldReset = false;

//let operationArray = ""; //array to store the inputs the user selects

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
        temp += numberPressed.value; //changing the temp assignment from display.textContent made it so that only the number is pushed in
    });
});

//different problem showed up: when the operator button is pressed,
// it only goes through the if part, not the else part
//therefore secondVariable has nothing and firstVariable has the entire display.textContent

const operatorsPressed = document.querySelectorAll('.operator');
operatorsPressed.forEach((operatorPressed) => {
    operatorPressed.addEventListener('click', () => {
        //must think of a better if logic so that it also goes through the else statement
        if (firstVariable === "") {
            if(temp === ""){
                alert("Please input a number before you hit any operators");
            }
            else{
                firstVariable = temp;
                temp = "";
            }
            //checking if the user puts in numbers and then a equal sign
            if (operatorPressed.value === '=') {
                alert("Please enter either a '+', '-', '*', or a'/' and a second number before hitting the equal sign.");
                clear();
            }
        }
        else {
            secondVariable = temp;
            temp = "";
            if (operatorPressed.value !== '=') {
                firstVariable = String(operate(firstVariable, operatorSymbol, secondVariable));
                display.textContent = firstVariable;
                secondVariable = "";
                
            }
            else {
                display.textContent = String(operate(firstVariable, operatorSymbol, secondVariable));
            }
        }
        operatorSymbol = operatorPressed.value; //pushes each individual operator into array does not check for error
        //shows the operators if they are not equal sign and as long as their is a number in the beginning
        if(operatorPressed.value !== '=' && firstVariable !== ""){
            display.textContent += operatorPressed.value;
            shouldReset = true;
        }
        shouldReset = true;
    });
});

const equalPressed = document.querySelector('#equals');
equalPressed.addEventListener('click', () => {
    equalPresent = true;
    console.log(firstVariable);
    console.log(operatorSymbol);
    console.log(secondVariable);
})


const clearDisplay = document.querySelector('#clear');
clearDisplay.addEventListener('click', clear);

function clear() {
    display.textContent = "";
    firstVariable = ""; //clears the contents of operationArray by setting length to 0
    operatorSymbol = "";
    secondVariable = "";
}

function operate(firstVariable, operatorSymbol, secondVariable) {
    if (operatorSymbol === '+') {
        return add(Number(firstVariable), Number(secondVariable));
    }
    else if (operatorSymbol === '-') {
        return subtract(Number(firstVariable), Number(secondVariable));
    }
    else if (operatorSymbol === '*') {
        return multiply(Number(firstVariable), Number(secondVariable));
    }
    else if (operatorSymbol === '/') {
        return divide(Number(firstVariable), Number(secondVariable));
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

