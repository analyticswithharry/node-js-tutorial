const sort = require("./sortAlgo.js");
const numbers = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 1000) + 1,
);

function benchmark(sortFunction, arr) {
  const start = performance.now();
  const result = sortFunction([...arr]);
  const end = performance.now();
  return {
    result,
    time: (end - start).toFixed(6),
  };
}

// Bubble Sort
console.log(sort.bubbleSort(numbers));
const bubble = benchmark(sort.bubbleSort, numbers);
console.log("\nBubble Sort:");
console.log("Time:", bubble.time, "ms");

// Selection Sort
console.log(sort.selectionSort(numbers));
const selection = benchmark(sort.selectionSort, numbers);
console.log("\nSelection Sort:");
console.log("Time:", selection.time, "ms");
