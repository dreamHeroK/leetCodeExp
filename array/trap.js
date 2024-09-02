// 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// https://leetcode.cn/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-interview-150

// dp
var trap = function (height) {
    let ans = 0;
    let len = height.length;
    let leftMax = new Array(len).fill(0);
    let rightMax = new Array(len).fill(0);
    leftMax[0] = height[0];
    rightMax[len - 1] = height[len - 1];
    for (let i = 1; i < len - 1; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }
    for (let i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }
    for (let i = 1; i < len - 1; i++) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return ans
};