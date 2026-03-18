var countGoodTriplets = function (arr, a, b, c) {
  let start = 0,
    len = arr.length;
  res = 0;
  mid = start + 1;
  while (start < len - 2) {
    if (Math.abs(arr[start] - arr[mid]) <= a) {
      let right = mid + 1;
      while (right < len) {
        if (
          Math.abs(arr[mid] - arr[right]) <= b &&
          Math.abs(arr[start] - arr[right]) <= c
        ) {
          res++;
        }
        right++;
      }
    }
    mid++;
    if (mid === len - 1) {
      start++;
      mid = start + 1;
    }
  }
  return res;
};

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));
