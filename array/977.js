var sortedSquares = function (nums) {
  let l = 0,
    r = nums.length - 1,
    pos = nums.length - 1;
  let res = new Array(nums.length - 1);
  while (l <= r) {
    if (nums[r] * nums[r] >= nums[l] * nums[l]) {
      res[pos] = nums[r] * nums[r];
      r--;
    } else {
      res[pos] = nums[l] * nums[l];
      l++;
    }
    pos--;
  }
  return res
};

console.log(sortedSquares([-7,-3,2,3,11]))