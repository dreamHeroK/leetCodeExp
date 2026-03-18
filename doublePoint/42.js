/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0,
    left = 0,
    right = height.length - 1,
    preMax = 0,
    sufMax = 0;
  while (left < right) {
    preMax = Math.max(preMax, height[left]);
    sufMax = Math.max(sufMax, height[right]);
    if (preMax < sufMax) {
      res += preMax - height[left++];
    } else {
      res += sufMax - height[right--];
    }
  }
  return res;
};
