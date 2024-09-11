const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while (line = await readline()) {
        let n = Number(line);
        if (n == 1 || n == 2) {
            console.log(-1)
            return
        }
        if ((n - 1) % 2 == 0) {
            console.log(2)
        } else {
            // n*(n-1)-n*(n+1)/2 算第三个是不是偶数 
            if ((n * (n - 1) - n * (n + 1) / 2) % 2 == 0) {
                console.log(3)
            } else {
                console.log(4)
            }
        }
    }
}()

