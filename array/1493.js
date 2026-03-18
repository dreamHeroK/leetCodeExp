var longestSubarray = function (nums) {
  let left = 0,
    zeroNum = 0,
    res = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroNum++;
    }
    while (zeroNum > 1) {
      if (nums[left] === 0) {
        zeroNum--;
      }
      left++;
    }
    res = Math.max(res, right - left);
  }
  return res;
};
console.log(longestSubarray([1, 1, 0, 1]));
