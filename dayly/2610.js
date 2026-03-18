/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let index = 0;
    if (res[index]) {
      res[index].push(nums[i]);
    } else {
      res[index] = [nums[i]];
    }
    while (nums[i] === nums[i + 1]) {
      index++;
      i++;
      if (res[index]) {
        res[index].push(nums[i]);
      } else {
        res[index] = [nums[i]];
      }
    }
  }
  return res;
};

console.log(findMatrix([1,3,4,1,2,3,1]))