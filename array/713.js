var numSubarrayProductLessThanK = function (nums, k) {
  let left = 0,
    res = 0,
    count = 1;
  for (let i = 0; i < nums.length; i++) {
    count *= nums[i];
    while (count >= k) {
      count /= nums[left++];
    }
    res += i - left + 1 < 0 ? 0 : i - left + 1;
  }
  return res;
};
