// 跳跃游戏
// https://leetcode.cn/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

// 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

// 贪心
// 维护一个最大可达距离
var canJump = function (nums) {
    let reach = 0;
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (i > reach) {
            return false
        }
        reach = Math.max(reach, i + nums[i])
    }
    return true
};