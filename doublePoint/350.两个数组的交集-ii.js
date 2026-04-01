/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length,
    i = 0,
    r = 0,
    res = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  while (i < len1 && r < len2) {
    if (nums1[i] === nums2[r]) {
      res.push(nums1[i]);
      i++;
      r++;
    } else if (nums1[i] > nums2[r]) {
      r++;
    } else {
      i++;
    }
  }
  return res;
};
// @lc code=end
