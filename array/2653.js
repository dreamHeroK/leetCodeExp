var getSubarrayBeauty = function (nums, k, x) {
  let res = new Array(nums.length - k + 1).fill(0),
    arr = new Array(101).fill(0);
  for (let i = 0; i < nums.length; i++) {
    arr[nums[i] + 50] += 1;
    if (i < k - 1) {
      continue;
    }
    let left = x;
    for (let j = 0; j <= 50; j++) {
      left -= arr[j];
      if (left <= 0) {
        res[i - k + 1] = j - 50;
        break;
      }
    }
    arr[nums[i - k + 1] + 50] -= 1;
  }
  return res;
};

console.log(getSubarrayBeauty([1, -1, -3, -2, 3], 3, 2));
