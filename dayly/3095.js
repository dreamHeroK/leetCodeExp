var minimumSubarrayLength = function (nums, k) {
  let min = -1,
    len = nums.length,
    res = 0,
    left = 0;
  for (let i = 0; i < len; i++) {
    res += nums[i];
    while (res >= k) {
      if (left === i) {
        return 1;
      }
      min = min === -1 ? i - left + 1 : Math.min(min, i - left + 1);
      res -= nums[left];
      left++;
    }
  }
  return min;
};
