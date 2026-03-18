var longestNiceSubarray = function (nums) {
  let left = 0,
    res = 0,
    window = [];
  for (let i = 0; i < nums.length; i++) {
    window.push(nums[i]);
    while (window.length > 1 && !checkWindow(window)) {
      window.shift();
      left++;
    }
    res = Math.max(res, window.length);
  }
  return res;
};

function checkWindow(arr) {
  let newItem = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if ((newItem & arr[i]) !== 0) {
      return false;
    }
  }
  return true;
}

console.log(longestNiceSubarray([1,3,8,48,10]));
