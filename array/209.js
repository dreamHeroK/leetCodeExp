var minSubArrayLen = function (target, nums) {
  let left = 0,
    len = nums.length,
    res = 0,
    min = 0;
  for (let i = 0; i < len; i++) {
    res += nums[i];
    while (res >= target) {
      min = min === 0 ? i - left + 1 : Math.min(min, i - left + 1);
      res -= nums[left];
      left++;
    }
  }
  return min;
};
