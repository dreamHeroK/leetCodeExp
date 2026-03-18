/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let min = Infinity,
    len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] === nums[i - 1] && i > 0) {
      continue;
    }
    let mid = i + 1,
      right = len - 1;
    while (mid < right) {
      let res = nums[i] + nums[mid] + nums[right];
      if (Math.abs(res - target) < Math.abs(min - target)) {
        min = res;
      }
      if (res > target) {
        right--;
      } else if (res < target) {
        mid++;
      } else {
        return res;
      }
    }
  }
  return min;
};

console.log(threeSumClosest([-4, 2, 2, 3, 3, 3], 0));
