var longestSubarray = function (nums, limit) {
  let left = 0,
    res = 0,
    maxQue = [],
    minQue = [];
  for (let i = 0; i < nums.length; i++) {
    while (maxQue.length && maxQue[maxQue.length - 1] < nums[i]) {
      maxQue.pop();
    }
    while (minQue.length && minQue[minQue.length - 1] > nums[i]) {
      minQue.pop();
    }
    maxQue.push(nums[i]);
    minQue.push(nums[i]);
    while (maxQue.length && minQue.length && maxQue[0] - minQue[0] > limit) {
      if (nums[left] === maxQue[0]) {
        maxQue.shift();
      }
      if (nums[left] === minQue[0]) {
        minQue.shift();
      }
      left++;
    }
    res = Math.max(res, i - left + 1);
  }
  return res;
};

console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0));
