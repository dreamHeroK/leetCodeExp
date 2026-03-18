var maxSum = function (nums, m, k) {
  let sum = 0,
    res = 0,
    map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
    sum += nums[i];
    if (i < k - 1) {
      continue;
    }
    if (map.size >= m) {
      res = Math.max(sum, res);
    }
    if (map.get(nums[i - k + 1]) > 1) {
      map.set(nums[i - k + 1], map.get(nums[i - k + 1]) - 1);
    } else {
      map.delete(nums[i - k + 1]);
    }
    sum -= nums[i - k + 1];
  }
  return res;
};

console.log(maxSum([1, 1, 1, 3], 2, 2));
