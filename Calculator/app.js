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
  if (calculation.indexOf("%") !== -1) {
    calculation = calculation.replace(/%/g, "/100");
  }
  result.innerHTML = eval(calculation);
}
