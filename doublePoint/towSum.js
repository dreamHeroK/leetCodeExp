// 两数之和 II - 输入有序数组

// 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

// 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

// 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

// 你所设计的解决方案必须只使用常量级的额外空间。

// https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/?envType=study-plan-v2&envId=top-interview-150


// 还说啥呢，就是干呗，O(n^2) 肯定不行
var twoSum = function (numbers, target) {
    let len = numbers.length
    for (let i = 1; i < len; i++) {
        let k = 0;
        while (k < i) {
            if (numbers[i] + numbers[k] == target) {
                return [k + 1, i + 1]
            }
            k++
        }
    }
};

// 双指针呗  还说啥呢

var twoSum = function (numbers, target) {
    let len = numbers.length;
    let left = 0;
    let right = len - 1
    while (true) {
        if (numbers[right] + numbers[left] > target) {
            right--
        } else if (numbers[right] + numbers[left] < target) {
            left++
        } else {
            return [left + 1, right + 1]
        }
    }
};