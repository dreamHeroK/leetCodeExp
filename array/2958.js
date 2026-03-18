var maxSubarrayLength = function (nums, k) {
  let left = 0,
    map = new Map(),
    res = 0;
  for (let right = 0; right < nums.length; right++) {
    let rightNum = map.get(nums[right]);
    if (rightNum) {
      map.set(nums[right], rightNum + 1);
    } else {
      map.set(nums[right], 1);
    }
    while (map.get(nums[right]) > k) {
      let leftNum = map.get(nums[left]);
       map.set(nums[left], leftNum - 1);
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};
