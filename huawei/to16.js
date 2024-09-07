const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let map = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
    };
    while ((line = await readline())) {
        let str = line.slice(2);
        let len = str.length;
        let index = len - 1;
        let num = 0;
        while (index >= 0) {
                num +=
                    (map[str[index]] || Number(str[index])) *
                    16 ** (len-index-1);
            index--
        }
        console.log(num);
    }
})();