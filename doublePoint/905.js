var sortArrayByParity = function (nums) {
  let len = nums.length,
    left = 0,
    right = len - 1;
  while (left < right) {
    if (nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
      let tmp = nums[left];
      nums[left] = nums[right];
      nums[right] = tmp;
      left++;
      right--;
    }
    if (nums[left] % 2 === 0) {
      left++;
    }
    if (nums[right] % 2 !== 0) {
      right--;
    }
  }
  return nums;
};
console.log(sortArrayByParity([0, 1]));
