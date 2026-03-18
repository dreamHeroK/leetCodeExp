var countSubarrays = function (nums, k) {
  let sum = 0,
    left = 0;
  res = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum * (i - left + 1) >= k) {
      sum -= nums[left];
      left++;
    }
    res += i - left + 1 < 0 ? 0 : i - left + 1;
  }
  return res;
};
