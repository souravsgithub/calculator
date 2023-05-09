const keys = document.querySelectorAll(".input div");
const output = document.querySelector(".output");
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const ops = ["+", "-", "x", "/"];
let current;
let newCurr;
let op;
let eqClicked = false;

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    key.addEventListener("click", () => {
        updateOutput(key);
    });
}
function updateOutput(key) {
    const val = key.innerText;
    if (nums.includes(Number(val)) || val === ".") {
        output.innerText += val;
        eqClicked = false;
    } else if (ops.includes(val)) {
        if (eqClicked && val === "x" || eqClicked && val === "/") {
            newCurr = 1;
        }
        else {
            newCurr = eqClicked ? Number("") : Number(output.innerText);
        }
        output.innerText = "";
        op = val;
        current = calculateCurrent(current, newCurr, op);
        console.log(current);
        eqClicked = false;
    } else if (val === "=") {
        newCurr = Number(output.innerText);
        current = calculateCurrent(current, newCurr, op);
        output.innerText = current;
        console.log(current);
        eqClicked = true;
    }
}

function calculateCurrent(current, newCurr, op) {
    if (op === "+") {
        if (current === undefined) {
            current = 0;
        }
        return current + newCurr;
    } else if (op === "-") {
        if (current === undefined) {
            current = 0;
        }
        return current - newCurr;
    } else if (op === "x") {
        if (current === undefined) {
            current = 1;
        }
        return current * newCurr;
    } else if (op === "/") {
        if (current === undefined) {
            current = newCurr * newCurr;
        }
        return current / newCurr;
    }
}