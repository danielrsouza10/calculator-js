const numButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const operatorButtons = ["+", "-", "*", "/", "=", "C"];
const container = document.querySelector(".container");
let value = "";
let value2 = "";
let operator = "";
let result = 0;

// function calculator(value1, value2, operator){
//     let value1 = value1;
//     let value2 = value2;
//     let operator = operator;
// }

function calculatorButtonsDisplay() {
  numButtons.forEach((item) => {
    const numButton = document.createElement("button");
    numButton.textContent = item;
    numButton.addEventListener("click", () => {
      value = value + item;

      // value.push(event.target.innerText);
      console.log(value);
    });
    container.appendChild(numButton);
  });
  
  operatorButtonsDisplay();
}

function operatorButtonsDisplay() {
  operatorButtons.forEach((item2) => {
    const operatorButton = document.createElement("button");
    operatorButton.textContent = item2;
    operatorButton.addEventListener("click", () => {
      operator = item2;

      // value.push(event.target.innerText);
      console.log(operator);
    });
    container.appendChild(operatorButton);
  });
}

calculatorButtonsDisplay();

