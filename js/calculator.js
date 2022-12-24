const displayField = document.querySelector(".display");
const digitBtns = document.querySelectorAll(".digits button");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
let previousDisplayValue = 0;
let currentOperator = "=";
let newInput = true;

function display(digit) {
  displayField.innerText = digit;
}

function displayNumber(digit) {
  if (newInput) {
    display(digit);
    newInput = false;
  } else {
    display(displayField.innerText + digit);
  }
}

function add(a, b) {
  return Math.trunc((+a + +b) * 100) / 100;
}

function subtract(a, b) {
  return Math.trunc((+a - +b) * 100) / 100;
}

function multiply(a, b) {
  return Math.trunc(+a * +b * 100) / 100;
}

function divide(a, b) {
  return Math.trunc((+a / +b) * 100) / 100;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "=":
      return b;
    default:
      console.log("unknown operator");
  }
}

function resetCalc() {
  currentOperator = "=";
  previousDisplayValue = 0;
  displayField.innerText = "0";
}

function displayResult(operator, a, b) {
  let result = operate(operator, a, b);
  if (result === Infinity) {
    displayField.innerText = "Try again!";
    setTimeout(() => {
      resetCalc();
    }, 1000);
  } else {
    display(result);
  }
  newInput = true;
}

function execute(operator) {
  if (newInput === false) {
    displayResult(currentOperator,
      previousDisplayValue, displayField.innerText);
    previousDisplayValue = displayField.innerText;
    newInput = true;
  }
}

for (let digitBtn of digitBtns) {
  let digit = digitBtn.innerText;
  digitBtn.addEventListener("click", () => displayNumber(digit));
}

for (let operatorBtn of operatorBtns) {
  let operator = operatorBtn.innerText;
  operatorBtn.addEventListener("click", () => {
    execute(operator);
    currentOperator = operator;
  });
}

equalsBtn.addEventListener("click", () => {
  displayResult(currentOperator,
    previousDisplayValue, displayField.innerText);
  currentOperator = "=";
});

clearBtn.addEventListener("click", () => resetCalc());
