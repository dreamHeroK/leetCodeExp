
// 14. 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。
// https://leetcode.cn/problems/longest-common-prefix/description/?envType=study-plan-v2&envId=top-interview-150
var longestCommonPrefix = function (strs) {
    let sameStr = strs[0]
    let len = strs.length
    let sameLen = sameStr.length
    for (let i = 1; i < len; i++) {
        if (strs[i].length < sameLen) {
            sameLen = strs[i].length
        }

        for (let j = sameLen - 1; j >= 0; j--) {
            if (sameStr[j] !== strs[i][j]) {
                sameLen = j;
            }
        }
    }
    return sameStr.slice(0, sameLen)
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))