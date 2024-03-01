
const display = document.getElementById('pantalla');
const buttons = document.querySelectorAll('.fila-botones input');

let expression = "";
let operator = "";

function agregar(value) {
  switch (value) {
    case "c": 
      expression = "";
      operator = "";
      break;
    case "=": 
      try {
        expression = eval(expression);
        operator = "";
      } catch (error) {
        expression = "Error";
      }
      break;
    case "^2":
      expression += "^2";
      break;
    case "Sqrt":
      expression = `Math.sqrt(${expression})`;
      break;
     case "pow":
      operator = "pow"; 
      baseValue = expression; 
      expression = ""; 
      display.value = `${baseValue} **`; 
      break;
    default:
      if (operator === "pow") {
        expression = Math.pow(baseValue, value);
        operator = "";
        baseValue = ""; 
      } else {
        expression += value;
      }
  }
  display.value = expression;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    agregar(button.value);
  });
});

