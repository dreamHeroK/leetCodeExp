var countCompleteSubarrays = function (nums) {
  let k = new Set(nums).size;
  let map = {},
    res = 0,
    left = 0;
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
      count++;
    } else {
      map[nums[i]]++;
    }
    while (map[nums[i]] >= 1 && count === k) {
      map[nums[left]]--;
      if (map[nums[left]] === 0) {
        count--;
      }
      left++;
    }
    res += left;
  }
  return res;
};

console.log(countCompleteSubarrays([1, 3, 1, 2, 2]));
