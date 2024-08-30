// 加油站
// 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
// https://leetcode.cn/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150

// 贪心
// 维护一个最大差 当最大差小于0时 则更新res 否则更新最大差

var canCompleteCircuit = function (gas, cost) {
    let len = gas.length
    let totalGas = 0;
    let totalCost = 0;
    let maxDiff = 0;
    let res = 0;
    for (let i = 0; i < len; i++) {
        totalCost += cost[i]
        totalGas += gas[i]
        let diff = gas[i] - cost[i]
        if (diff > 0) {
            maxDiff += diff
        } else {
            if (maxDiff + diff < 0) {
                maxDiff = 0
                res = i + 1
            } else {
                maxDiff += diff
            }
        }
    }
    if (totalCost > totalGas) {
        return -1
    }
    return res
};

console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6]))