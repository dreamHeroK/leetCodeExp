// 3239. 最少翻转次数使二进制矩阵回文 I
// 给你一个 m x n 的二进制矩阵 grid 。

// 如果矩阵中一行或者一列从前往后与从后往前读是一样的，那么我们称这一行或者这一列是 回文 的。

// 你可以将 grid 中任意格子的值 翻转 ，也就是将格子里的值从 0 变成 1 ，或者从 1 变成 0 。

// 请你返回 最少 翻转次数，使得矩阵 要么 所有行是 回文的 ，要么所有列是 回文的 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let mStart = 0;
  let mEnd = m - 1;
  let mNum = 0;
  let nNum = 0;
  while (mStart <= mEnd) {
    let nStart = 0;
    let nEnd = n - 1;
    while (nStart <= nEnd) {
      if (grid[mStart][nStart] !== grid[mStart][nEnd]) {
        nNum++;
      }
      if (mStart !== mEnd) {
        if (grid[mEnd][nStart] !== grid[mEnd][nEnd]) {
          nNum++;
        }
      }
      if (grid[mStart][nStart] !== grid[mEnd][nStart]) {
        mNum++;
      }
      if (nStart !== nEnd) {
        if (grid[mStart][nEnd] !== grid[mEnd][nEnd]) {
          mNum++;
        }
      }
      nStart++;
      nEnd--;
    }
    if (nStart === nEnd) {
      if (grid[mStart][nStart] !== grid[mEnd][nStart]) {
        mNum++;
      }
    }
    mStart++;
    mEnd--;
  }

  return Math.min(mNum, nNum);
};
console.log(
  minFlips([
    [0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1],
  ])
);
