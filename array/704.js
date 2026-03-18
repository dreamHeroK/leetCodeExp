// 二分查找
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

// var search = function (nums, target) {
//   let res = 0;
//   while (true) {
//     let point = Math.floor(nums.length / 2);
//     if (nums[nums.length - 1] < target) {
//       return -1;
//     }
//     if (nums[0] > target) {
//       return -1;
//     }
//     if (nums[point] === target) {
//       return res + point;
//     } else if (nums[point] < target) {
//       nums = nums.slice(point);
//       res += point;
//     } else {
//       nums = nums.slice(0, point);
//     }
//   }
// };

const search = (nums, target) => {
  let left = 0;
  right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
