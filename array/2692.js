var countSubarrays = function (nums, k) {
  let maxNum = Math.max(...nums),
    count = 0,
    res = 0,
    left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxNum) {
      count++;
    }
    while (count >= k) {
      if (nums[left] === maxNum) {
        count--;
      }
      left++;
    }
    res += left;
  }
  return res;
};

