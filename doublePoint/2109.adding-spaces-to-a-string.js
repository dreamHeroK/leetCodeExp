/*
 * @lc app=leetcode id=2109 lang=javascript
 *
 * [2109] Adding Spaces to a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let len = s.length + spaces.length,
    res = new Array(len).fill(' ');
  for (let i = 0, r = 0; i + r < len; ) {
    if (spaces[r] !== i) {
      res[i+r]=s[i];
      i++;
    } else {
      r++;
    }
  }
  return res.join("");
};

// @lc code=end
