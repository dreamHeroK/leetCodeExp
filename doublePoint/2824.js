/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1,
    count = 0;
  while (left < right) {
    if (nums[left] + nums[right] >= target) {
      right--;
    } else {
      left++;
      count += right - left + 1;
    }
  }
  return count;
};
