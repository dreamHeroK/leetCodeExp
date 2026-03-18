var applyOperations = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    if (nums[left] !== 0) {
      if (nums[left] === nums[left + 1]) {
        nums[left] += nums[left];
        nums[left + 1] = 0;
      }
      left++;
    } else if (nums[right] === 0) {
      right--;
    } else {
      let i = left;
      while (i < right) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        i++;
      }
      right--;
    }
  }
  return nums;
};

console.log(
  applyOperations([
    847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272,
  ])
);
