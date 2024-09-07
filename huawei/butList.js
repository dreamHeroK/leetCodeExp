// https://www.nowcoder.com/practice/f9c6f980eeec43ef85be20755ddbeaf4?tpId=37&tags=&title=&difficulty=0&judgeStatus=0&rp=1&sourceUrl=%2Fexam%2Foj%2Fta%3FtpId%3D37&dayCountBigMember=365%E5%A4%A9
// 购物单
// 1000 5
// 800 2 0
// 400 5 1
// 300 5 1
// 400 3 0
// 500 2 0
// 输出：2200

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while (line = await readline()) {
        let tokens = line.split(' ');
        let a = parseInt(tokens[0]);
        let b = parseInt(tokens[1]);
        console.log(a + b);
    }
}()
