const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const divid = (a, b) => a / b;

  return { add, sub, mult, divid };
})();

let result = "";
let operator = "";
let number = [];

result = () => {
  if (operator == "+") {
    calculator.add(1, 2);
  }
};

function numPressed(value) {
  number.push(parseFloat(value));
  console.log(number);
}

function operatorPressed(value) {
  operator = value;
  console.log(operator);
}
