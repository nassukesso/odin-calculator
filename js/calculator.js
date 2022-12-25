const displayField = document.querySelector(".display");
const digitBtns = document.querySelectorAll(".digits button");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
let firstOperand = "";
let secondOperand = "";
let currentOperator = "";
let newInput = true;
let notEnoughInputs = true;

function display(a) {
  displayField.textContent = a;
}

function displayNumber(digit) {
  if (newInput) {
    display(digit);
    newInput = false;
  } else {
    display(displayField.textContent + digit);
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

function toFixed2(a) {
  let result = (a.toFixed(2) * 100) / 100;
  if (result === 0) {
    return 0;
  } else {
    return result;
  }
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "+":
      return toFixed2(add(a, b));
    case "-":
      return toFixed2(subtract(a, b));
    case "*":
      return toFixed2(multiply(a, b));
    case "/":
      return toFixed2(divide(a, b));
    case "=":
      return b;
    default:
      console.log("unknown operator");
  }
}

function resetCalc() {
  currentOperator = "";
  firstOperand = "";
  secondOperand = "";
  displayField.textContent = "0";
  newInput = true;
  notEnoughInputs = true;
}

function displayResult(operator, a, b) {
  let result = operate(operator, a, b);
  if (result === Infinity) {
    displayField.textContent = "Try again!";
    setTimeout(() => {
      resetCalc();
    }, 1000);
  } else {
    display(result);
  }
}

function execute() {
  if (newInput === false && notEnoughInputs === false) {
    secondOperand = displayField.textContent;
    displayResult(currentOperator, firstOperand, secondOperand);
    firstOperand = displayField.textContent;
    newInput = true;
  } else if (newInput === false && notEnoughInputs === true) {
    firstOperand = displayField.textContent;
    newInput = true;
    notEnoughInputs = false;
  }
}

for (let digitBtn of digitBtns) {
  let digit = digitBtn.textContent;
  digitBtn.addEventListener("click", () => displayNumber(digit));
}

for (let operatorBtn of operatorBtns) {
  let operator = operatorBtn.textContent;
  operatorBtn.addEventListener("click", () => {
    execute();
    currentOperator = operator;
  });
}

equalsBtn.addEventListener("click", () => {
  execute();
  currentOperator = "=";
});

clearBtn.addEventListener("click", () => resetCalc());
