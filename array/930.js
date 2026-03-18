var numSubarraysWithSum = function (nums, goal) {
  let left1 = 0,
    left2 = 0,
    sum1 = 0,
    res = 0,
    sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i];
    sum2 += nums[i];
    while (sum1 >= goal && left1 <= i) {
      sum1 -= nums[left1++];
    }
    while (sum2 > goal && left2 <= i) {
      sum2 -= nums[left2++];
    }
    res += left1 - left2;
  }

  return res;
};
