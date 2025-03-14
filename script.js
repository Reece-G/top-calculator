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

let num1
let num2
let oper

let display_output = 0;

const displayElement = document.querySelector(".display");

const buttonArray = document.querySelectorAll('.number')
buttonArray.forEach(button => {
    button.addEventListener("click", e => {
        updateDisplayValue(button.id, true)
    })
})