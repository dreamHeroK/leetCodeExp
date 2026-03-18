var minOperations = function (nums, x) {
  let sum = nums.reduce((a, b) => a + b, 0) - x;
  if (sum < 0) {
    return -1;
  }
  let left = 0,
    curSum = 0,
    len = nums.length,
    res = len + 1;
  for (let i = 0; i < len; i++) {
    curSum += nums[i];
    while (curSum > sum) {
      curSum -= nums[left];
      left++;
    }
    if (curSum === sum) {
      res = Math.min(res, len - (i - left + 1));
    }
  }
  return res > len ? -1 : res;
};

console.log(minOperations([5, 6, 7, 8, 9], 4));
