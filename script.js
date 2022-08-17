let result = document.querySelector(".calculator-display");
const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    const key = event.target;
    const action = key.dataset.action;
    const KeyContent = key.textContent;
    const displayedNum = result.textContent;
    if (!action) {
      if (displayedNum === "0") {
        result.textContent = KeyContent;
      } else {
        result.textContent = result.textContent + KeyContent;
      }
    }
    if (action === "decimal") {
      result.textContent = result.textContent + KeyContent;
    }
  }

  // if (
  //   action === "add" ||
  //   action === "subtract" ||
  //   action === "multiply" ||
  //   action === "divide"
  // ) {
  //   console.log("operator key");
  // }
  // if (action === "clear") {
  //   console.log("clear key!");
  // }
  // if (action === "calculate") {
  //   console.log("equal key!");
  // }
  // if (action === "decimal") {
  //   console.log("decimal key!");
  // }
});
