const keys = document.querySelectorAll(".btn");
const display = document.querySelector(".screen");

let firstDigit = "";
let operator = "";
let secondDigit = "";

// Operation functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

keys.forEach((key) =>
  key.addEventListener("click", () => {
    const value = key.innerHTML;
    if (!isNaN(value) || value === ".") {
      if (operator == "") {
        firstDigit += value;
        display.value = firstDigit;
      } else {
        secondDigit += value;
        display.value = secondDigit;
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      operator = value;
    } else if (value === "=") {
      let result = 0;

      let firstValue = parseFloat(firstDigit);
      let secondValue = parseFloat(secondDigit);

      switch (operator) {
        case "+":
          result = firstValue + secondValue;
          break;
        case "-":
          result = firstValue - secondValue;
        default:
        case "*":
          result = firstValue * secondValue;
          break;
        case "/":
          result = secondValue !== 0 ? firstValue / secondValue : "Error";
          break;
      }

      display.value = result;
      firstDigit = result.toString();
      secondDigit = "";
      operator = "";
    } else if (value === "AC") {
      firstDigit = "";
      secondDigit = "";
      operator = "";
      display.value = "";
    }
  })
);
