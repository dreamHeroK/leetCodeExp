/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  arr1.sort((a, b) => Math.abs(a) - Math.abs(b));
  arr2.sort((a, b) => Math.abs(a) - Math.abs(b));
  let i = 0,
    r = 0,
    res = 0;
    
};
// @lc code=end
