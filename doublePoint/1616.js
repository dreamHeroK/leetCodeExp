/**
 * 1616. Split Two Strings to Make Palindrome
 * a[0..i] + b[i+1..n-1] 或 b[0..i] + a[i+1..n-1] 能否为回文
 * 贪心双指针对齐外部，中间段落在 a 或 b 上任意一个为回文即可
 *
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
  const n = a.length;

  /** 判断 s[i..j]（闭区间）是否为回文 */
  const isPal = (s, i, j) => {
    while (i < j) {
      if (s.charCodeAt(i++) !== s.charCodeAt(j--)) return false;
    }
    return true;
  };

  /** 尝试 prefix(a) + suffix(b) 能否成回文 */
  const can = (x, y) => {
    let i = 0,
      j = n - 1;
    while (i < j && x.charCodeAt(i) === y.charCodeAt(j)) {
      i++;
      j--;
    }
    return isPal(x, i, j) || isPal(y, i, j);
  };

  return can(a, b) || can(b, a);
};

let a = "xbdef",
  b = "xecab";
console.log(checkPalindromeFormation(a, b));
a = "ulacfd";
b = "jizalu";
console.log(checkPalindromeFormation(a, b));
