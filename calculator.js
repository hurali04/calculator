document.addEventListener("DOMContentLoaded", function () 
{
  const display = document.getElementById("res");
  function calculateResult() 
  {
    const expression = display.value.replace(/x/g, "*").replace(/÷/g, "/");
    try 
    {
      const result = eval(expression);
      display.value = result;
    } 
    catch 
    {
      display.value = "Error";
    }
  }
  function clearDisplay() {
    display.value = "";
  }
  function backspace() {
    display.value = display.value.slice(0, -1);
  }
  function handleButtonClick(event) {
    const value = event.target.value;
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearDisplay();
    } else if (value === "←") {
      backspace();
    } else {
      appendToDisplay(value);
    }
  }
  function handleKeydown(event) {
    const key = event.key;
    if (
      (key >= "0" && key <= "9") ||
      key === "." ||
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/" ||
      key === "%"
    ) {
      appendToDisplay(key);
    } else if (key === "Enter") {
      calculateResult();
    } else if (key === "Backspace") {
      backspace();
    } else if (key === "c" || key === "C") {
      clearDisplay();
    } else if (key === "(" || key === ")") {
      appendToDisplay(key);
    }
  }
  document.querySelectorAll(".btn input[type=button]").forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  }); 
});
