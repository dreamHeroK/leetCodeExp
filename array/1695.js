var maximumUniqueSubarray = function (nums) {
  let left = 0,
    res = 0,
    set = new Array(10001).fill(0),
    curTotal = 0;
  for (let right = 0; right < nums.length; right++) {
    curTotal += nums[right];
    while (set[nums[right]] > 0) {
      curTotal -= nums[left];
      set[nums[left]]--;
      left++;
    }
    set[nums[right]]++;
    res = Math.max(res, curTotal);
  }
  return res;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
