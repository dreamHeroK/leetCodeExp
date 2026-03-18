var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);
  let res = 0,
    left = 0,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while ((sum + k) / nums[i] < i - left + 1) {
      sum -= nums[left];
      left++;
    }
    res = Math.max(res, i - left + 1);
  }
  return res;
};


console.log(maxFrequency([1,2,4],5))