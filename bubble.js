function bubbleSort(arr) {
  for (let end = arr.length - 1; end > 0; end--) {
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        // let temp = arr[i];
        // arr[i] = arr[i + 1];
        // arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;