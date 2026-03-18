var duplicateZeros = function (arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      let right = n - 1;
      while (right > i + 1) {
        arr[right] = arr[right - 1];
        right--;
      }
      if (i < n - 1) {
        arr[i + 1] = 0;
      }
      i++;
    }
  }
  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
