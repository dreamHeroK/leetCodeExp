var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let len = nums.length,
    res = 0;
  for (let i = 2; i < len; i++) {
    let left = 0,
      right = i - 1;
    while (left < right) {
      if (nums[i] < nums[left] + nums[right]) {
        res += right - left;
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};

console.log(triangleNumber([2, 2, 3, 4]));
