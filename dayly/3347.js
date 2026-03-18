var maxFrequency = function (nums, k, numOperations) {
  nums.sort((a, b) => a - b);
  let left = 0,
    right = 0,
    ans = 0;

  while (right < nums.length) {
    let time = numOperations;
    if (nums[right === nums[left]]) {
      right++;
    } else if (nums[right] - nums[left] <= k && time > 0) {
      right++;
      time--;
    } else {
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

console.log(maxFrequency([2], 5, 0));
