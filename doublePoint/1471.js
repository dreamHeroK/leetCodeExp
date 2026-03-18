/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  arr.sort((a, b) => a - b);
  let len = arr.length,
    mid = parseInt((len - 1) / 2),
    left = 0,
    right = len - 1,
    res = [];
  while (k > res.length) {
    if (arr[right] - arr[mid] >= arr[mid] - arr[left]) {
      res.push(arr[right--]);
    } else {
      res.push(arr[left++]);
    }
  }
  return res
};
