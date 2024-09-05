// 验证回文串
// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

// 字母和数字都属于字母数字字符。

// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

// https://leetcode.cn/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150
var isPalindrome = function (s) {
    let arr = s.toLowerCase().split('').filter(item => {
        let reg = /[a-z0-9]/
        return reg.test(item)
    })
    if (arr.length == 0 || arr.length == 1) {
        return true
    }
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false
        }
        start++
        end--
    }
    return true
};
console.log(isPalindrome("9P"))