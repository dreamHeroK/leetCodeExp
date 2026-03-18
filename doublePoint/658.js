var findClosestElements = function (arr, k, x) {
  let len = arr.length;
  if (arr[0] >= x) {
    return arr.slice(0, k);
  }
  if (arr[len - 1] <= x) {
    return arr.slice(len - k);
  }

  let startIndex,
    min = Infinity;
  for (let i = 0; i < len; i++) {
    if (Math.abs(arr[i] - x) < min) {
      startIndex = i;
      min = Math.abs(arr[i] - x);
    }
  }
  let res = [arr[startIndex]],
    left = startIndex - 1,
    right = startIndex + 1;
  k--;
  while (k > 0) {
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x) || right >= len) {
      res.unshift(arr[left]);
      left--;
    } else {
      res.push(arr[right]);
      right++;
    }
    k--;
  }
  return res;
};

console.log(findClosestElements([-2, -1, 1, 2, 3, 4, 5], 7, 3));
