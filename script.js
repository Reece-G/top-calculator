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
    console.log(x, y)
    return operator(Number(x), Number(y))
}

function updateDisplayValue(value, replace = false) {
    replace || newDisplay ? displayElement.textContent = value : displayElement.textContent += value
}

function checkForNumbers() {
    return (num1 && num2)
}

function clearDisplay(all = false) {
    displayElement.textContent = RESET_DISPLAY;
    newDisplay = true
}

function resetCalculator() {
    newDisplay = true
    num1 = null
    num2 = null
    operation = null
}

// Calculator
let num1
let num2
let operation
let newDisplay = true
const opperationsArray = [add, subtract, multiply, divide]

const RESET_DISPLAY = 0;

// Element retrieval
const displayElement = document.querySelector(".display")
const numberButtons = document.querySelectorAll(".number")
const operateButtons = document.querySelectorAll(".operate")
const equalButton = document.querySelector("#equals")
const clearButton = document.querySelector("#clear")

// Event Listeners
clearButton.addEventListener("click", clearDisplay)

numberButtons.forEach(button => {
    button.addEventListener("click", e => {
        updateDisplayValue(button.id)
        newDisplay = false 
        console.log(checkForNumbers())
    })
})

operateButtons.forEach(button => {
    button.addEventListener("click", e => {
        num1 = displayElement.textContent

        operation = opperationsArray.find((func) => func.name == button.id)
        
        clearDisplay()

    })
})

equalButton.addEventListener("click", e => {
    result = operate(num1, displayElement.textContent, operation)
    updateDisplayValue(result, true)

    // reset calculator
    resetCalculator()
})
