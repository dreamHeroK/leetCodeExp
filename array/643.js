var findMaxAverage = function (nums, k) {
  let total = 0,
    maxTotal;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    if (i < k - 1) {
      continue;
    }
    maxTotal = maxTotal ? Math.max(total, maxTotal) : total;
    total -= nums[i - k + 1];
  }
  return maxTotal / k;
};

console.log(findMaxAverage([-1], 1));
