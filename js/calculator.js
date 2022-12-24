const digitButtons = document.querySelectorAll(".digits button");
const display = document.querySelector(".display");
let displayValue = 0;
let currentOperator;

function displayDigit(digit) {
  display.innerText = digit;
  displayValue = digit;
}

for (let digitButton of digitButtons) {
  let digit = digitButton.innerText;
  digitButton.addEventListener("click", () => displayDigit(digit));
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
  console.log((a / b).toFixed(2));
  return (a / b).toFixed(2);
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
    default:
      return "unknown operator";
  }
}
