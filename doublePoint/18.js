/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let len = nums.length,
    res = [];
  for (let i = 0; i < len - 3; i++) {
    if (nums[i] === nums[i - 1] && i > 0) {
      continue;
    }
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) {
      continue;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      return res;
    }
    for (let right = len - 1; right > i + 2; right--) {
      if (nums[right] === nums[right + 1] && right < len - 1) {
        continue;
      }
      let a = i + 1,
        b = right - 1;
      while (a < b) {
        if (nums[i] + nums[right] + nums[a] + nums[b] === target) {
          while (nums[a] === nums[a + 1]) {
            a++;
          }
          while (nums[b] === nums[b - 1]) {
            b--;
          }
          res.push([nums[i], nums[a], nums[b], nums[right]]);
          a++;
        } else if (nums[i] + nums[right] + nums[a] + nums[b] > target) {
          b--;
        } else {
          a++;
        }
      }
    }
  }
  return res;
};

console.log(fourSum([-2,-1,-1,1,1,2,2], 0));
