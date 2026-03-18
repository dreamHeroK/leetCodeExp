var numberOfSubarrays = function (nums, k) {
  let left1 = 0,
    left2 = 0,
    res = 0,
    sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      sum1++;
      sum2++;
    }
    while (sum1 >= k && left1 <= i) {
      if (nums[left1++] % 2 !== 0) {
        sum1--;
      }
    }
    while (sum2 > k && left2 <= i) {
      if (nums[left2++] % 2 !== 0) {
        sum2--;
      }
    }
    res += left1 - left2;
  }
  return res;
};
