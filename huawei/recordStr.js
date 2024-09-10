// 统计字符
// 输入一行字符，分别统计出包含英文字母、空格、数字和其它字符的个数。

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let arr
    while (line = await readline()) {
        arr = line.splice('')
    }
    let stratege1 = /[a-zA-Z]/
    let stratege2 = /\s/
    let stratege3 = /\d/
    let stratege4 = /\W/
    let res = [0, 0, 0, 0]
    for (let i = 0; i < arr.length; i++) {
        if (stratege1.test(arr[i])) {
            res[0]++
        } else if (stratege2.test(arr[i])) {
            res[1]++
        } else if (stratege3.test(arr[i])) {
            res[2]++
        } else {
            res[3]++
        }
    }
    console.log(res.join('\n'))

}()
