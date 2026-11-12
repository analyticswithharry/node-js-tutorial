// bubble sort algortihm
function bubbleSort(arr) {
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arrLen - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// selection sort algorithm

const selectionSort = (arr) => {
  let arrLen = arr.length;
  for (let i = 0; i < arrLen - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

module.exports = { bubbleSort, selectionSort };
