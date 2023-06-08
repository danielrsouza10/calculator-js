const buttons = ["0", "1", "2", 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "=", "C"];
const container = document.querySelector(".container");
let value = "";
let value2 = "";
let operator = "";

// function calculator(value1, value2, operator){
//     let value1 = value1;
//     let value2 = value2;
//     let operator = operator;
// }

function calculatorButtons() {
  buttons.forEach((item) => {
    const button = document.createElement("button");
    button.textContent = item;
    button.addEventListener("click", (event) => {
      if(item >= 0){
        value = value + item;
      }
      // value.push(event.target.innerText);
      console.log(value);
    });

    container.appendChild(button);
  });
}

calculatorButtons();


