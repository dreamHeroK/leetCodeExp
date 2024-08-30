// 除自身以外数组的乘积

// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
// https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150

var productExceptSelf = function (nums) {
    let left = [1]
    let right = [1];
    let len = nums.length
    for (let i = 1; i < len; i++) {
        left.push(left[i - 1] * nums[i - 1])
        right.unshift(right[0] * nums[len - i])
    }
    for (let i = 0; i < len; i++) {
        left[i] = left[i] * right[i]
    }
    console.log(left)
    return left
};

productExceptSelf([1, 2, 3, 4])