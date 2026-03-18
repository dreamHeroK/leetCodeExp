var sortArrayByParityII = function (nums) {
  let i1 = 0,
    i2 = 1,
    len = nums.length;
  while (i1 < len && i2 < len) {
    if (nums[i1] % 2 === 0) {
      i1 += 2;
    } else if (nums[i2] % 2 !== 0) {
      i2 += 2;
    } else {
      [nums[i1], nums[i2]] = [nums[i2], nums[i1]];
      i1 += 2;
      i2 += 2;
    }
  }
  return nums;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
