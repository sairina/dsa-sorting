function merge(arr1, arr2) {
  let result = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;

  while (arr1Pointer < arr1.length && arr2Pointer < arr2.length) {
    if (arr1[arr1Pointer] > arr2[arr2Pointer]) {
      result.push(arr2[arr2Pointer]);
      arr2Pointer++;
    } else {
      result.push(arr1[arr1Pointer]);
      arr1Pointer++;
    }
  }

  return result.concat(arr2.slice(arr2Pointer))
    .concat(arr1.slice(arr1Pointer));
}

function mergeSort(arr) {
  //base case
  if(arr.length <= 1) return arr;

  //find middle
  const middle = Math.floor(arr.length/2);
  //divide arr into one and two, and recursively call mergeSort on each half
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  
  //combine one and two
  return merge(left, right);
}

module.exports = { merge, mergeSort };