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

const firstVariable = document.querySelector('.firstVariable');
const operatorSymbol = document.querySelector('.operator');
const secondVariable = document.querySelector('.secondVariable');

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