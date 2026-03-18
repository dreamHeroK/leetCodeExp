var subarraysWithKDistinct = function (nums, k) {
  let len = nums.length;
  let count1 = 0,
    count2 = 0,
    arr1 = new Array(len + 1).fill(0),
    arr2 = new Array(len + 1).fill(0),
    left1 = 0,
    left2 = 0,
    res = 0;
  for (let i = 0; i < len; i++) {
    if (arr1[nums[i]] === 0) {
      count1++;
    }
    arr1[nums[i]]++;
    if (arr2[nums[i]] === 0) {
      count2++;
    }
    arr2[nums[i]]++;
    while (left1 <= i && count1 >= k) {
      arr1[nums[left1]]--;
      if (arr1[nums[left1]] === 0) {
        count1--;
      }
      left1++;
    }
    while (left2 <= i && count2 > k) {
      arr2[nums[left2]]--;
      if (arr2[nums[left2]] === 0) {
        count2--;
      }
      left2++;
    }
    res += left1 - left2;
  }
  return res;
};

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], "2"));
