/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let len = height.length,
    left = 0,
    res = 0,
    right = len - 1;
  while (left < right) {
    res = Math.max((right - left) * Math.min(height[left], height[right]), res);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
