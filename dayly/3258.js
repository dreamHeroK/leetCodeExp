// 3258. 统计满足 K 约束的子字符串数量 I给你一个 二进制 字符串 s 和一个整数 k。

// 如果一个 二进制字符串 满足以下任一条件，则认为该字符串满足 k 约束：

// 字符串中 0 的数量最多为 k。
// 字符串中 1 的数量最多为 k。
// 返回一个整数，表示 s 的所有满足 k 约束 的
// 子字符串
// 的数量。

// 示例 1：

// 输入：s = "10101", k = 1

// 输出：12

// 解释：

// s 的所有子字符串中，除了 "1010"、"10101" 和 "0101" 外，其余子字符串都满足 k 约束。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  let len = s.length;
  let i = 0;
  let res = 0;
  while (i < len) {
    let num0 = 0;
    let num1 = 0;
    let strlen = 0;
    while ((num0 <= k || num1 <= k) && i + strlen < len) {
      if (s[i + strlen] === "0") {
        num0++;
      } else {
        num1++;
      }
      if (!(num0 > k && num1 > k)) {
        strlen++;
      }
    }
    res += strlen;
    i++;
  }
  return res;
};

var countKConstraintSubstrings = function (s, k) {
  let left = 0,
    res = 0,
    count0 = 0,
    count1 = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      count0++;
    } else {
      count1++;
    }
    while (count0 > k && count1 > k) {
      if (s[left] === "0") {
        count0--;
      } else {
        count1--;
      }
      left++;
    }
    res += i - left + 1;
  }
  return res
};

countKConstraintSubstrings("10101", 1);
