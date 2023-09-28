const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const divid = (a, b) => a / b;

  return { add, sub, mult, divid };
})();

const input = document.querySelector(".input");

let operator = "";
let firstNumber = "";
let secondNumber = "";

function calculate() {
  let result = 0;
  if (operator == "+") {
    result += calculator.add(parseFloat(firstNumber), parseFloat(secondNumber));
    input.value = result;
    console.log(result);
    firstNumber = "";
    secondNumber = "";
    operator = "";
  } else if (operator == "-") {
    result += calculator.sub(parseFloat(firstNumber), parseFloat(secondNumber));
    input.value = result;
    console.log(result);
    firstNumber = "";
    secondNumber = "";
    operator = "";
  } else if (operator == "*") {
    result += calculator.mult(
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
    input.value = result;
    console.log(result);
    firstNumber = "";
    secondNumber = "";
    operator = "";
  } else {
    if (parseFloat(secondNumber) != 0) {
      result += calculator.divid(
        parseFloat(firstNumber),
        parseFloat(secondNumber)
      );
      input.value = result;
    } else {
      result = "ERRO";
      input.value = result;
    }

    console.log(result);
    input.value = result;
    firstNumber = "";
    secondNumber = "";
    operator = "";
  }
  return result;
}

function numPressed(value) {
  if (operator == "") {
    firstNumber += value;
    input.value = firstNumber;
    console.log(firstNumber);
  } else {
    secondNumber += value;
    input.value = secondNumber;
    console.log(secondNumber);
  }
}

function operatorPressed(value) {
  operator = value;
  console.log(operator);
}

function onClearButton() {
  input.value = 0;
  firstNumber = "";
  secondNumber = "";
  operator = "";
}
