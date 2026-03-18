var maximumSubarraySum = function (nums, k) {
  let set = new Map();
  let sum = 0,
    maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let newKey = nums[i];
    sum += nums[i];
    if (set.has(newKey)) {
      set.set(newKey, set.get(newKey) + 1);
    } else {
      set.set(newKey, 1);
    }
    if (i < k - 1) {
      continue;
    }
    let preKey = nums[i - k + 1];
    if (set.size === k) {
      maxSum = Math.max(maxSum, sum);
    }
    sum -= preKey;
    let setKey = set.get(preKey);
    if (setKey > 1) {
      set.set(preKey, setKey - 1);
    } else {
      set.delete(preKey);
    }
  }
  return maxSum;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
