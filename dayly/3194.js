// 3194. 最小元素和最大元素的最小平均值
// 你有一个初始为空的浮点数数组 averages。另给你一个包含 n 个整数的数组 nums，其中 n 为偶数。

// 你需要重复以下步骤 n / 2 次：

// 从 nums 中移除 最小 的元素 minElement 和 最大 的元素 maxElement。
// 将 (minElement + maxElement) / 2 加入到 averages 中。
// 返回 averages 中的 最小 元素。

var minimumAverage = function (nums) {
    let len = nums.length
    nums.sort((a, b) => a - b)
    let arr = []
    while (len > 0) {
        arr.push((nums.pop() + nums.shift()) / 2)
        len -= 2
    }
    return Math.min(...arr)
};

console.log(minimumAverage([1, 9, 8, 3, 10, 5]))