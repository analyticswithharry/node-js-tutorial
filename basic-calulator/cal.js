// Group all calculator operations by category so the UI can call them by name.
const cal = {
  // Operations that need two numbers.
  basic: {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b,
  },

  // Operations that work with one number, except power which uses two.
  scientific: {
    sin: (x) => Math.sin(x),
    cos: (x) => Math.cos(x),
    tan: (x) => Math.tan(x),
    sqrt: (x) => Math.sqrt(x),
    square: (x) => x ** 2,
    power: (x, y) => x ** y,
  },
};

// Expose the calculator API to app.js in the browser.
window.cal = cal;
