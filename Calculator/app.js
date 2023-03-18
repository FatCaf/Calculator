let result = document.getElementById("result");

function addToResult(value) {
  if (result.innerHTML === "0") {
    result.innerHTML = value;
  } else {
    result.innerHTML += value;
  }
}

function clearResult() {
  result.innerHTML = "0";
}

function backspace() {
  result.innerHTML = result.innerHTML.slice(0, -1);
  if (result.innerHTML === "") {
    result.innerHTML = "0";
  }
}

function calculateResult() {
  let calculation = result.innerHTML;
  let operator = '';
  let operands = [];

  if (calculation.indexOf("%") !== -1) {
    operands = calculation.split('%');
    operator = '%';
  } else if (calculation.indexOf("+") !== -1) {
    operands = calculation.split('+');
    operator = '+';
  } else if (calculation.indexOf("-") !== -1) {
    operands = calculation.split('-');
    operator = '-';
  } else if (calculation.indexOf("*") !== -1) {
    operands = calculation.split('*');
    operator = '*';
  } else {
    result.innerHTML = calculation;
    return;
  }

  const num1 = parseFloat(operands[0]);
  const num2 = parseFloat(operands[1]);

  let answer;

  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '%':
      answer = num1 / 100 * num2;
      break;
  }

  result.innerHTML = answer;
}




/*
function calculateResult() {
  let calculation = result.innerHTML;
  if (calculation.indexOf("%") !== -1) {
    calculation = calculation.replace(/%/g, "/100");
  }
  result.innerHTML = eval(calculation);
}
*/
