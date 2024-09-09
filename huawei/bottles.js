// HJ22 汽水瓶
// 某商店规定：三个空汽水瓶可以换一瓶汽水，允许向老板借空汽水瓶（但是必须要归还）。
// 小张手上有n个空汽水瓶，她想知道自己最多可以喝到多少瓶汽水。
// 数据范围：输入的正整数满足 
// 1≤n≤100 

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while (line = await readline()) {
        let num = line;
        let res = 0;
        while (num > 2) {
            res += (num - num % 3) / 3
            num = (num - num % 3) / 3 + num % 3;
        }
        if (num == 2) {
            res++
        }
        console.log(res)
    }
}()
