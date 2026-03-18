var longestOnes = function (nums, k) {
  let left = 0,
    res = 0,
    quene = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      quene.push(i);
    }
    if (quene.length > k) {
      left = quene.shift() + 1;
    }
    res = Math.max(res, i - left + 1);
  }
  return res;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
