/*
 * @lc app=leetcode.cn id=1855 lang=javascript
 *
 * [1855] 下标对中的最大距离
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
  let i = 0,
    res = 0,
    r = 0,
    len1 = nums1.length,
    len2 = nums2.length;
  while (i <= r && i < len1 && r < len2) {
    if (nums1[i] <= nums2[r]) {
      res = Math.max(r - i, res);
      r++;
    } else {
      i++;
      while (i > r) {
        r++;
      }
    }
  }
  return res;
};
// @lc code=end
