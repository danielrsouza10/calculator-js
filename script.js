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

function numButton(value) {
  if (value1 === "" || operator === "") {
    value1 += value;
  } else {
    value2 += value;
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
    console.log(result);
  } else if (operator === "-") {
    result = parseInt(value1) - parseInt(value2);
    value1 = "";
    value2 = "";
    operator = "";
    console.log(result);
  } else if (operator === "*") {
    result = parseInt(value1) * parseInt(value2);
    value1 = "";
    value2 = "";
    operator = "";
    console.log(result);
  } else if (operator === "/") {
    result = parseInt(value1) / parseInt(value2);
    value1 = "";
    value2 = "";
    operator = "";
    console.log(result);
  }
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
