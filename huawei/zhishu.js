// 质数因子
// 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let arr = []
    while (line = await readline()) {
        let num = Number(line)
        if (num == 1) {
            console.log(num);
            return
        }
        let end = Math.sqrt(num)
        console.log(parseInt(end))
        let k
        for (k = 2; k <= end; k++) {
            while (num % k == 0) {
                arr.push(k)
                num /= k
            }
        }
        if (num > 1) {
            arr.push(num)
        }
        console.log(arr.join(' '))
    }
}()
