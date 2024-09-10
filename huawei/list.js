// 合唱队
// https://www.nowcoder.com/practice/6d9d69e3898f45169a441632b325c7b4?tpId=37&tqId=21247&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3Fpage%3D2%26tpId%3D37%26type%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=

// 1 3 5 4 6 5 4 5 1
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let len;
    let arr;
    while ((line = await readline())) {
        if (!len) {
            len = Number(line);
        } else {
            arr = line.split(" ").map(Number);
        }
    }
    let left = new Array(len).fill(1);
    let right = new Array(len).fill(1);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                left[i] = Math.max(left[i], left[j]+1);
            }
        }
    }
    for (let i = len - 1; i >= 0; i--) {
        for (let j = len - 1; j > i; j--) {
            if (arr[i] > arr[j]) {
                right[i] = Math.max(right[i], right[j]+1);
            } 
        }
    }
    let max = 1;
    for (let i = 0; i < len; i++) {
        max = Math.max(max, left[i] + right[i]-1);
    }
    console.log(len - max);
})();