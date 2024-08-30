// 买卖股票的最佳时机 II
// 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

// 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

// 返回 你能获得的 最大 利润 。
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

// 分割成每天的利润
// 然后累加
// 注意边界 贪心
var maxProfit = function (prices) {
    let max = 0;
    let len = prices.length
    for (let i = 0; i < len - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            max += prices[i + 1] - prices[i]
        }
    }
    return max
};

// dp
var maxProfit = function (prices) {
    let len = prices.length
    let dp = new Array(len).fill(new Array(2).fill(0))
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    return dp[len - 1][0]
};
