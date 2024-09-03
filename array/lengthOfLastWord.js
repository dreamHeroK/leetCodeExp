// 最后一个单词的长度
// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大
// 子字符串
// 。

var lengthOfLastWord = function (s) {
    let arr = s.split('');
    let len = arr.length
    let endIndex = len - 1;
    let startInex = 0
    for (let i = len - 1; i >= 0; i--) {
        if (arr[i] == ' ') {
            if (startInex) {
                return endIndex - startInex + 1
            } else {
                endIndex--
            }
        } else {
            startInex = i
        }
    }
    return endIndex - startInex + 1
};

console.log(lengthOfLastWord("Hello World"))