const buttons = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "+",
  "-",
  "*",
  "/",
  "=",
  "Clear",
];

const container = document.querySelector(".container");
let value1 = "";
let value2 = "";
let operator = "";
let result = 0;
const input = document.querySelector(".input");

function numButton(value) {
  if (value1 === "" || operator === "") {
    value1 += value;
    input.value = value1;
  } else {
    value2 += value;
    input.value = value2;
  }
  console.log(value1);
  console.log(value2);
  console.log(operator);
}

function operatorButton(value) {
  operator = value;
}

function operate() {
  if (operator === "+") {
    result = parseInt(value1) + parseInt(value2);
    value1 = "";
    value2 = "";
    operator = "";
    input.value = result;
  } else if (operator === "-") {
    result = parseInt(value1) - parseInt(value2);
    value1 = "";
    value2 = "";
    operator = "";
    input.value = result;
  } else if (operator === "*") {
    result = parseInt(value1) * parseInt(value2);
    value1 = "";
    value2 = "";
    operator = "";
    input.value = result;
  } else if (operator === "/") {
    if (value2 != 0) {
      result = parseInt(value1) / parseInt(value2);
      value1 = "";
      value2 = "";
      operator = "";
    } else {
      result = "ERROR";
    }
    input.value = result;
  }
}

function onClearButton() {
  value1 = "";
  value2 = "";
  result = "";
  input.value = 0;
}

// function calculator(value1, value2, operator){
//     let value1 = value1;
//     let value2 = value2;
//     let operator = operator;
// }

// function operate(value1, value2, operator) {
//   if (operator === "+") {
//     result = value1 + value2;
//   } else if (operator === "-") {
//     result = value1 - value2;
//   } else if (operator === "/") {
//     result = value1 / value2;
//   } else if (operator === "*") {
//     result = value1 * value2;
//   }
//   console.log(result);
// }

// function calculatorButtonsDisplay() {
//   buttons.forEach((item) => {
//     const button = document.createElement("button");
//     button.textContent = item;
//     container.appendChild(button);
//   });
// }

// calculatorButtonsDisplay();

// const button = document.querySelectorAll('button');
// button.forEach((item) => addEventListener("click", () => {
//   if (item >= 0 && item <= 9) {
//     value1 = value1 + item;
//     console.log(value1);
//   } else {
//     operator = item;
//     console.log(operator);
//     // button.addEventListener("click", () => {
//     //   if (item >= 0 && item <= 9) {
//     //     value2 = value2 + item;
//     //   } else if (item === "=") {
//     //     operate(value1, value2, operator);
//     //   }
//     // });
//   }
// })
// );
