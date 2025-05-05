let displayValue = '';
let currentOperation= null;
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}
function setOperation(operation){ 
    if (currentOperation !== null){
        igual();
    }
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = '';
}
function igual(){
    if (currentOperation === null || displayValue === '') return;

    const secondOperand = parseFloat(displayValue);
    switch(currentOperation){
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            displayValue = (firstOperand / secondOperand).toString();
            break;
    }
    updateDisplay();
    currentOperation = null;
}

function clear(){
    displayValue = '';
    currentOperation = null;
    firstOperand = null;
    updateDisplay();
}

function updateDisplay(){
    document.getElementById('pantalla').value = displayValue;
}
document.addEventListener('DOMContentLoaded', function() {
    const clearButton = document.getElementById('clear');
    if (clearButton) {
        clearButton.addEventListener('click', clear);
    } else {
        console.error("No se encontró el botón con el ID 'clear'");
    }
});
