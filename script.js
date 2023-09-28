const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const divid = (a, b) => a / b;

  return { add, sub, mult, divid };
})();

let operator = "";
let firstNumber = "";
let secondNumber = "";

function calculate() {
  let result = 0;
  if (operator == "+") {
    result += calculator.add(parseFloat(firstNumber), parseFloat(secondNumber));
    console.log(result);
    firstNumber = "";
    secondNumber = "";
    operator = "";
  } else if (operator == "-") {
    result += calculator.sub(parseFloat(firstNumber), parseFloat(secondNumber));
    console.log(result);
    firstNumber = "";
    secondNumber = "";
    operator = "";
  } else if (operator == "*") {
    result += calculator.mult(
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
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
    } else {
      result = "ERRO";
    }

    console.log(result);
    firstNumber = "";
    secondNumber = "";
    operator = "";
  }
  return result;
}

function numPressed(value) {
  if (operator == "") {
    firstNumber += value;
    console.log(firstNumber);
  } else {
    secondNumber += value;
    console.log(secondNumber);
  }
}

function operatorPressed(value) {
  operator = value;
  console.log(operator);
}
