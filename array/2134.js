var minSwaps = function (nums) {
  let num1Count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      num1Count++;
    }
  }
  let arr = nums.concat(nums.slice(0, num1Count - 1));
  let num0Count = 0,
    min0Count = num1Count;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      num0Count++;
    }
    if (i < num1Count - 1) {
      continue;
    }
    min0Count = Math.min(num0Count, min0Count);
    if (arr[i - num1Count + 1] === 0) {
      num0Count--;
    }
  }
  return min0Count;
};

console.log(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0]));
