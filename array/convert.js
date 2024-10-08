// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：
// numRows * 2
var convert = function (s, numRows) {
    let arr = new Array(numRows).fill('')
    let strArr = s.split('')
    let len = strArr.length;
    let mod = numRows > 1 ? (numRows - 1) * 2 : 1
    for (let i = 0; i < len; i++) {
        console.log(i, i % mod >= numRows ? mod - i % mod : i % mod)
        arr[i % mod >= numRows ? mod - i % mod : i % mod] += strArr[i]
    }
    return arr.join('')
};
console.log(convert("PAYPALISHIRING", 1))
