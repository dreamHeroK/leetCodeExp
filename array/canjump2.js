// 跳跃游戏 II
// 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

// 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

// 0 <= j <= nums[i] 
// i + j < n
// 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
// https://leetcode.cn/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150

// 就挨着跳
var jump = function (nums) {
    let len = nums.length;
    let ans = 0;
    let end = 1;
    let start = 0
    while (end < len) {
        let maxPos = 0;
        for (let i = 0; i < end; i++) {
            maxPos = Math.max(maxPos, i + nums[i])
        }
        start = end;
        end = maxPos + 1;
        ans++
    }
    return ans
};