var minSizeSubarray = function (nums, target) {
  let time = 0,
    len = nums.length,
    left = 0,
    res = -1,
    numsSum = 0,
    sum = 0;
  numsSum = nums.reduce((a, b) => a + b);
  if (target >= numsSum) {
    time = parseInt(target / numsSum);
    sum = target - (target % numsSum);
  }
  if (sum === target) {
    return time * len;
  }
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    while (sum > target) {
      sum -= nums[left];
      left++;
    }
    if (sum === target) {
      let length = time * len + i - left + 1;
      res = res === -1 ? length : Math.min(res, length);
    }
    if (left >= len) {
      return res;
    }
    if (i === len - 1) {
      i = -1;
      time++;
    }
  }
  return res;
};

console.log(minSizeSubarray([2, 4, 6, 8], 3));
