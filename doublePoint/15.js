var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let len = nums.length,
    res = [];
  right = len - 1;
  for (let left = 0; left < len - 2; left++) {
    if (nums[left] > 0) return res;
    if (left > 0 && nums[left] === nums[left - 1]) continue;
    let mid = left + 1;
    right = len - 1;
    while (mid < right) {
      if (nums[left] + nums[mid] + nums[right] === 0) {
        while (nums[mid] === nums[mid + 1]) {
          mid++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        res.push([nums[left], nums[mid], nums[right]]);
        mid++;
      } else if (nums[left] + nums[mid] + nums[right] > 0) {
        right--;
      } else {
        mid++;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
