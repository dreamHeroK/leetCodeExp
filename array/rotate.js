// 轮转数组
// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 你吗的直接超时了
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
    console.log(nums)
}

//  直接拼就完了
var rotate = function (nums, k) {
    let len = nums.length
    let n = len - k
    // 考虑边界
    while (n < 0) {
        n += len
    }
    nums.splice(len, 0, ...nums.slice(0, n))
    nums.splice(0, n)
    console.log(nums)
}

// 额外数组
var rotate = function(nums, k) {
    const n = nums.length;
    const newArr = new Array(n);
    for (let i = 0; i < n; ++i) {
        newArr[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; ++i) {
        nums[i] = newArr[i];
    }
};

rotate([1, 2, 3], 4)