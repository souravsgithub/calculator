const result = Number(
  document.querySelector(".calculator-display").textContent
);
const keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", function (event) {
  const key = event.target;
  const action = key.dataset.action;
  if (!action) {
    console.log("number key!");
  }
  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    console.log("operator key");
  }
  if (action === "clear") {
    console.log("clear key!");
  }
  if (action === "calculate") {
    console.log("equal key!");
  }
  if (action === "decimal") {
    console.log("decimal key!");
  }
});
