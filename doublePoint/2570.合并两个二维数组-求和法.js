/*
 * @lc app=leetcode.cn id=2570 lang=javascript
 *
 * [2570] 合并两个二维数组 - 求和法
 */

// @lc code=start
/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length,
    i = 0,
    r = 0,
    res = [];
  while (i < len1 && r < len2) {
    if (nums1[i][0] === nums2[r][0]) {
      res.push([nums1[i][0], nums1[i][1] + nums2[r][1]]);
      i++;
      r++;
    } else if (nums1[i][0] < nums2[r][0]) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[r]);
      r++;
    }
  }
  if (i < len1) {
    res = res.concat(nums1.slice(i));
  }
  if (r < len2) {
    res = res.concat(nums2.slice(r));
  }
  return res;
};

// let nums1 = [
//     [2, 4],
//     [3, 6],
//     [5, 5],
//   ],
//   nums2 = [
//     [1, 3],
//     [4, 3],
//   ];
// console.log(mergeArrays(nums1, nums2));
// @lc code=end
