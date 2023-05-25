function add(a,b){
    return a + b;
}

function subtract (a,b){
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a/b;
}

const firstVariable = "";
const operatorSymbol = "";
const secondVariable = "";
/*logic:
    1. put all the numbers and operators into an array
    2. use some sort of method to find either * or /
    3. get indexOf that * or / of the array
    4. the two operands are one minus that index and one plus that index
    5. all calculations should be done after all the numbers and operators are put in
*/

let operationArray = []; //array to store the inputs the user selects

const display = document.querySelector('.display');

//selection and function for when the number buttons are pressed
const numbersPressed = document.querySelectorAll('.numbers');
numbersPressed.forEach((numberPressed) =>{
    numberPressed.addEventListener('click', () => {
        display.textContent += numberPressed.value;
        operationArray.push(numberPressed.value); //pushes each individual numbers into array will store only single digit per index
    });
});

const operatorsPressed = document.querySelectorAll('.operator');
operatorsPressed.forEach((operatorPressed) => {
    operatorPressed.addEventListener('click', () => {
        display.textContent += operatorPressed.value;
        operationArray.push(operatorPressed.value); //pushes each individual operator into array does not check for error
    });
});

console.log(operationArray);

const clearDisplay = document.querySelector('#clear');
clearDisplay.addEventListener('click', () => {
    display.textContent = "";
    operationArray.length = 0; //clears the contents of operationArray by setting length to 0
});

function operate(firstVariable, operatorSymbol, secondVariable) {
    if(operatorSymbol === '+') {
        add(firstVariable, secondVariable);
    }
    else if(operatorSymbol === '-'){
        subtract(firstVariable, secondVariable);
    }
    else if(operatorSymbol === '*'){
        multiply(firstVariable, secondVariable);
    }
    else if(operatorSymbol === '/'){
        divide(firstVariable, secondVariable);
    }
}