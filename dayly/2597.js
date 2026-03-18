/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0,
    res = 0,
    len = nums.length,
    moreArr = [],
    lessArr = [];
  for (let i = 0; i < len; i++) {
    moreArr.push(nums[i]);
  }
};
