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


void (async function () {
    // Write your code here
    let lines = [];
    let primary = {},
        follows = {};
    while ((line = await readline())) {
        lines.push(line);
    }
    let n = lines[0].split(" ").map(Number)[0];
    let m = lines[0].split(" ").map(Number)[1];
    for (let i = 1; i <= m; i++) {
        let [price, val, follow] = lines[i].split(" ").map(Number);
        if (follow) {
            if (follows[follow]) {
                follows[follow].push([price, val]);
            } else {
                follows[follow] = [[price, val]];

            }
        } else {
            primary[i] = [price, val];
        }
    }
    m = Object.keys(primary).length;
    // 靠 这一步不行。tame的这里地址引用到同一个了  找了半天问题 吐了
    // let dp = new Array(m + 1).fill(new Array(n + 1).fill(0));
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    let w = [[]], v = [[]];
    for (let key in primary) {
        let w_temp = [], v_temp = [];
        w_temp.push(primary[key][0]);
        v_temp.push(primary[key][1] * primary[key][0]);
        if (follows[key]) {
            w_temp.push(w_temp[0] + follows[key][0][0]);
            v_temp.push(v_temp[0] + follows[key][0][1] * follows[key][0][0]);
            if (follows[key][1]) {
                w_temp.push(w_temp[0] + follows[key][1][0]);
                v_temp.push(v_temp[0] + follows[key][1][1] * follows[key][1][0]);
                w_temp.push(w_temp[0] + follows[key][0][0] + follows[key][1][0]);
                v_temp.push(v_temp[0] + follows[key][0][1] * follows[key][0][0] + follows[key][1][1] * follows[key][1][0]);
            }
        }
        w.push(w_temp);
        v.push(v_temp);
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 10; j <= n; j += 10) {
            let max_i = dp[i - 1][j]
            for (let k = 0; k < w[i].length; k++) {
                if (j - w[i][k] >= 0) {
                    // console.log(i,k,'ik2',w[i][k],j)
                    max_i = Math.max(max_i, dp[i - 1][j - w[i][k]] + v[i][k])
                }
            }
            dp[i][j] = max_i
        }
    }
    console.log(dp[m][n])
})();

