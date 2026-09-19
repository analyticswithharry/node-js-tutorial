// Cache the two areas that are updated while the calculator is running.
const result = document.getElementById("result");
const expression = document.getElementById("expression");

// Store the current display value and any pending binary operation.
let current = "0";
let stored = null;
let operation = null;
let waitingForOperand = false;

// Render the current value on the calculator display.
const updateDisplay = () => {
  result.textContent = current;
};

// Reset the calculation state when an operation produces an invalid value.
const showError = (message) => {
  current = message;
  stored = null;
  operation = null;
  waitingForOperand = true;
  updateDisplay();
};

// Add a digit or decimal point to the number currently being entered.
const inputNumber = (value) => {
  if (waitingForOperand) {
    current = value === "." ? "0." : value;
    waitingForOperand = false;
  } else if (value === "." && current.includes(".")) {
    return;
  } else if (current === "0" && value !== ".") {
    current = value;
  } else if (current.length < 12) {
    current += value;
  }
  updateDisplay();
};

// Run a two-number operation using the appropriate operation group.
const calculate = (a, b, selectedOperation) => {
  const calculator =
    selectedOperation === "power" ? window.cal.scientific : window.cal.basic;
  const value = calculator[selectedOperation](a, b);
  if (!Number.isFinite(value)) {
    showError("Error");
    return null;
  }
  return value;
};

// Save the first number and wait for the second number.
const chooseOperation = (selectedOperation) => {
  const value = Number(current);
  if (stored !== null && !waitingForOperand) {
    const computed = calculate(stored, value, operation);
    if (computed === null) return;
    stored = computed;
    current = String(computed);
  } else {
    stored = value;
  }
  operation = selectedOperation;
  waitingForOperand = true;
  expression.textContent = `${stored} ${selectedOperation}`;
  updateDisplay();
};

// Complete the pending operation when the equals button is pressed.
const equals = () => {
  if (stored === null || operation === null) return;
  const value = calculate(stored, Number(current), operation);
  if (value === null) return;
  expression.textContent = `${stored} ${operation} ${current} =`;
  current = String(value);
  stored = null;
  operation = null;
  waitingForOperand = true;
  updateDisplay();
};

// Run a single-number scientific function, or begin the xʸ operation.
const scientific = (selectedFunction) => {
  if (selectedFunction === "power") {
    chooseOperation("power");
    expression.textContent = `${stored} xʸ`;
    return;
  }

  const value = window.cal.scientific[selectedFunction](Number(current));
  if (!Number.isFinite(value)) {
    showError("Error");
    return;
  }
  expression.textContent = `${selectedFunction}(${current})`;
  current = String(value);
  waitingForOperand = true;
  updateDisplay();
};

// Connect number buttons to the number-entry handler.
document.querySelectorAll("[data-number]").forEach((button) => {
  button.addEventListener("click", () => inputNumber(button.dataset.number));
});

// Connect arithmetic operator buttons to the operation handler.
document.querySelectorAll("[data-operation]").forEach((button) => {
  button.addEventListener("click", () =>
    chooseOperation(button.dataset.operation),
  );
});

// Connect scientific buttons such as sin, cos, square root, and power.
document.querySelectorAll("[data-scientific]").forEach((button) => {
  button.addEventListener("click", () => scientific(button.dataset.scientific));
});

// The equals button completes the current calculation.
document
  .querySelector('[data-action="equals"]')
  .addEventListener("click", equals);

// AC clears the display and all pending calculation state.
document
  .querySelector('[data-action="clear"]')
  .addEventListener("click", () => {
    current = "0";
    stored = null;
    operation = null;
    waitingForOperand = false;
    expression.textContent = "";
    updateDisplay();
  });

// Change the sign of the number currently shown.
document.querySelector('[data-action="sign"]').addEventListener("click", () => {
  current = String(Number(current) * -1);
  updateDisplay();
});

// Convert the number currently shown to a percentage.
document
  .querySelector('[data-action="percent"]')
  .addEventListener("click", () => {
    current = String(Number(current) / 100);
    updateDisplay();
  });
