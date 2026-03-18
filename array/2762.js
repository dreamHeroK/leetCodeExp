var continuousSubarrays = function (nums) {
  let left = 0,
    max = 0,
    min = -1,
    res = 0,
    map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    max = Math.max(...map.keys());
    min = Math.min(...map.keys());
    while (Math.abs(min - max) > 2) {
      map.set(nums[left], map.get(nums[left]) - 1);
      if(map.get(nums[left])===0){
        map.delete(nums[left])
      }
      max = Math.max(...map.keys());
      min = Math.min(...map.keys());
      left++;
    }
    res += i - left + 1;
  }
  return res;
};
