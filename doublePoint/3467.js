var transformArray = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (nums[left] % 2 === 0) {
      nums[left] = 0;
      left++;
    } else if (nums[right] % 2 !== 0) {
      nums[right] = 1;
      right--;
    } else {
      nums[left] = 0;
      nums[right] = 1;
      left++;
      right--;
    }
  }
  return nums;
};

console.log(transformArray([8]))