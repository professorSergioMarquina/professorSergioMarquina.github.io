document.addEventListener("DOMContentLoaded", function () {
  const resultInput = document.getElementById("result");
  const buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const buttonValue = this.textContent;
      handleButtonPress(buttonValue);
    });
  });

  function handleButtonPress(value) {
    switch (value) {
      case "C":
        clearText();
        break;
      case "CE":
        clearEntry();
        break;
      case "🔙":
        backspace();
        break;
      case "=":
        calculateResult();
        break;
      case "+/-":
        toggleSign();
        break;
      case "x^2":
        square();
        break;
      case "SQRT":
        squareRoot();
        break;
      case "%":
        calculatePercentage();
        break;
      default:
        appendToInput(value);
        break;
    }
  }

  function clearText() {
    resultInput.value = "";
  }

  function clearEntry() {
    resultInput.value = resultInput.value.slice(0, -1);
  }

  function backspace() {
    const currentValue = resultInput.value;
    resultInput.value = currentValue.slice(0, -1);
  }

  function calculateResult() {
    const currentValue = resultInput.value;
    try {
      const result = eval(currentValue);
      resultInput.value = result;
    } catch (error) {
      // Handle any errors during evaluation
      console.log("Error:", error.message);
    }
  }

  function toggleSign() {
    const currentValue = parseFloat(resultInput.value);
    resultInput.value = -currentValue;
  }

  function square() {
    const currentValue = parseFloat(resultInput.value);
    resultInput.value = currentValue ** 2;
  }

  function squareRoot() {
    const currentValue = parseFloat(resultInput.value);
    resultInput.value = Math.sqrt(currentValue);
  }

  function calculatePercentage() {
    const currentValue = parseFloat(resultInput.value);
    resultInput.value = currentValue / 100;
  }

  function appendToInput(value) {
    resultInput.value += value;
  }
});
