/*
 * @lc app=leetcode.cn id=2540 lang=javascript
 *
 * [2540] 最小公共值
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length;
  let i = 0,
    r = 0;
  while (i < len1 && r < len2) {
    if (nums1[i] === nums2[r]) {
      return nums1[i];
    } else if (nums1[i] > nums2[r]) {
      r++;
    } else {
      i++;
    }
  }
  return -1;
};
// @lc code=end
