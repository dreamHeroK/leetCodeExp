var numOfSubarrays = function (arr, k, threshold) {
  let len = arr.length;
  let total = 0;
  let res = 0;
  for (let i = 0; i < len; i++) {
    total += arr[i];
    if (i < k - 1) {
      continue;
    }
    if (total >= threshold * k) {
      res++;
    }
    total -= arr[i - k + 1];
  }
  return res;
};

console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
