// 3261. 统计满足 K 约束的子字符串数量 II
// 给你一个 二进制 字符串 s 和一个整数 k。

// 另给你一个二维整数数组 queries ，其中 queries[i] = [li, ri] 。

// 如果一个 二进制字符串 满足以下任一条件，则认为该字符串满足 k 约束：

// 字符串中 0 的数量最多为 k。
// 字符串中 1 的数量最多为 k。
// 返回一个整数数组 answer ，其中 answer[i] 表示 s[li..ri] 中满足 k 约束 的
// 子字符串
//  的数量。
// https://leetcode.cn/problems/count-substrings-that-satisfy-k-constraint-ii/description/

var countKConstraintSubstrings = function (s, k, queries) {
  let len = s.length;
  let qLen = queries.length;
  let i = 0;
  queries = queries.map((item, i) => {
    return [...item, 0, 0];
  });
  let res = new Array(qLen).fill(0);
  while (i < len) {
    let strlen = 0;
    while (i + strlen < len) {
      for (let j = 0; j < qLen; j++) {
        if (i >= queries[j][0] && i + strlen <= queries[j][1]) {
          if (s[i + strlen] === "0") {
            queries[j][2]++;
          } else {
            queries[j][3]++;
          }
          if (!(queries[j][2] > k && queries[j][3] > k)) {
            res[j]++;
          }
        }
      }

      strlen++;
    }
    for (let j = 0; j < qLen; j++) {
      queries[j][2] = 0;
      queries[j][3] = 0;
    }
    i++;
  }
  return res;
};

console.log(
  countKConstraintSubstrings("010101", 1, [
    [0, 5],
    [1, 4],
    [2, 3],
  ])
);
