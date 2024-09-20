// 三数之和
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k 
// ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let len = nums.length;
    let left = 0;
    let right = len - 1;
    let mid = 1;
    let result = new Set();
    while (left < mid && mid < right) {
        if (nums[left] + nums[mid] + nums[right] > 0) {
            right--
        } else if (nums[left] + nums[mid] + nums[right] < 0) {
            mid++
        } else {
            result.add(`${nums[left]},${nums[mid]},${nums[right]}`)
            mid++
        }
        if (mid >= right) {
            left++
            mid = left + 1
            right = len - 1
        }
    }
    return [...result].map(item => item.split(',').map(item => Number(item)))

};

threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))