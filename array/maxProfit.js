// 买卖股票的最佳时机
// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。


// 不多说 直接遍历 我不知道服务端顶不顶得住
var maxProfit = function (prices) {
    let max = []
    for (let i = 0; i < prices.length - 1; i++) {
        let num = Math.max(...prices.slice(i + 1)) - prices[i]
        max.push(num)
    }
    return Math.max(...max) < 0 ? 0 : Math.max(...max)

};

//  dp
var maxProfit = function (prices) {
    let min = prices[0]
    let max = 0
    for (let i = 0; i < prices.length; i++) {
        // dp循环体 小于当前最小值 则更新最小值 否则更新最大利润
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > max) {
            max = prices[i] - min
        }

    }
    return max

};
maxProfit([7, 1, 5, 3, 6, 4])