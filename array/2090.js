var getAverages = function (nums, k) {
  let res = new Array(nums.length).fill(-1);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    if (i < 2 * k) {
      continue;
    }
    res[i - k] = Math.floor(total / (2 * k + 1));
    total -= nums[i - 2 * k];
  }
  return res;
};

console.log(getAverages([9] ,10));
