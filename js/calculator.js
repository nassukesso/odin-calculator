const add = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  console.log((a / b).toFixed(2));
  return (a / b).toFixed(2);
}

const operate = function (operator, a, b) {
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
      return "unknown operator"
  }
}