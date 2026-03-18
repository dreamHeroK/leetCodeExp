var maximumBeauty = function (nums, k) {
  let arr = quickSort(nums);
  let left = 0,
    res = 1,
    prev = arr[0];
  for (let right = 1; right < arr.length; right++) {
    while (arr[right] > prev + 2 * k) {
      left++;
      prev = arr[left];
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let point = Math.floor(arr.length / 2);
  let pivot = arr[point];
  let left = [],
    right = [];
  // 将基准值移除，以便分组
  arr.splice(point, 1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

var maximumBeauty = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0,
    res = 1;
  for (let right = 1; right < nums.length; right++) {
    while (nums[right] > nums[left] + 2 * k) {
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(maximumBeauty([4, 6, 1, 2], 2));
