var countGood = function (nums, k) {
  let res = 0,
    left = 0,
    map = new Map(),
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
      count += map.get(nums[i]);
    } else {
      map.set(nums[i], 0);
    }
    while (count >= k) {
      count -= map.get(nums[left]);
      map.set(nums[left], map.get(nums[left]) - 1);
      left++;
    }
    res += left;
  }
  return res;
};

console.log(countGood([1, 1, 1, 1, 1], 10));
