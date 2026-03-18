var moveZeroes = function (nums) {
  let left = 0,
    right = 0;
  while (right < nums.length) {
    if (nums[right]) {
      let n = nums[left];
      nums[left] = nums[right];
      nums[right] = n;
      left++;
    }
    right++;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
