// 找出字符串中第一个匹配项的下标

// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
// 如果 needle 不是 haystack 的一部分，则返回  -1 。


var strStr = function (haystack, needle) {
    let len = needle.length;
    let len2 = haystack.length;
    if (len > len2) return -1;
    if (len === len2) {
        if (haystack !== needle) {
            return -1
        } else {
            return 0
        }
    }
    for (let i = 0; i < len2 - len + 1; i++) {
        let n = 0;
        while (n < len) {
            if (needle[n] == haystack[i + n]) {
                n++
            } else {
                break
            }
        }
        console.log(n, 'nnn')
        if (n === len) {
            return i
        }
    }
    return -1
};

console.log(strStr("abc", "c"))