// 3254. 长度为 K 的子数组的能量值 I

// 一个数组的 能量值 定义为：

// 如果 所有 元素都是依次 连续 且 上升 的，那么能量值为 最大 的元素。
// 否则为 -1 。
// 你需要求出 nums 中所有长度为 k 的
// 子数组
//  的能量值。

// 请你返回一个长度为 n - k + 1 的整数数组 results ，其中 results[i] 是子数组 nums[i..(i + k - 1)] 的能量值。
// 输入：nums = [1,2,3,4,3,2,5], k = 3

// 输出：[3,4,-1,-1,-1]

// 记录一个down
var resultsArray = function (nums, k) {
  let res = [];
  let down = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] - nums[i - 1] !== 1) {
      down = i;
    }
    if (i + 1 >= k) {
      console.log(i);
      if (i + 1 - k < down) {
        res.push(-1);
      } else {
        res.push(nums[i]);
      }
    }
  }
//   console.log(res, "res");
  return res;
};

resultsArray([1, 3, 4], 2);
