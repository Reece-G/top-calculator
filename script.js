// Calculator script

// Calculator helper functions
function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function operate(x, y, operator) {
    return operator(x, y)
}

function updateDisplayValue(value, replace = false) {
    replace ? displayElement.textContent = value : displayElement.textContent += value
}

function clearDisplay() {
    displayElement.textContent = RESET_DISPLAY;
}

// Calculator
let num1
let num2
let oper

const RESET_DISPLAY = 0;

// Element retrieval
const displayElement = document.querySelector(".display")
const buttonArray = document.querySelectorAll(".number")

// Event Listeners
buttonArray.forEach(button => {
    button.addEventListener("click", e => {
        updateDisplayValue(button.id)
    })
})

const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", clearDisplay)