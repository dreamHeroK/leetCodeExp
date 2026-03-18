var minimumOperations = function (nums) {
  let len = nums.length,
    n = len - 1;
  let i = len % 3;
  let arr = new Array(101).fill(0);
  while (n >= 0) {
    if (arr[nums[n]]) {
      return (n + 1) % 3 > 0 ? parseInt((n + 1) / 3) + 1 : (n + 1) / 3;
    } else {
      arr[nums[n]]++;
    }
    n--
  }
  return 0;
};

console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7]));
