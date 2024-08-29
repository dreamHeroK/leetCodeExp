// 删除有序数组中的重复项 II
// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 额  哥们直接splice 就完事了
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0
    let len = nums.length
    for (let i = 1; i < len - 1; i++) {
        if (nums[i] == nums[i - 1] && nums[i] == nums[i + 1]) {
            nums.splice(i, 1)
            i--
            len--
        }
    }
    return len
};

removeDuplicates([1, 1, 1, 2, 2, 3])

//双指针
var removeDuplicates = function (nums) {
    const n = nums.length;
    // 小于2直接返回
    if (n <= 2) {
        return n;
    }
    let slow = 2, fast = 2;
    while (fast < n) {
        // 慢的前两个不等于快的，慢的止等于快的，慢的自增
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        // 快的自增
        ++fast;
    }
    return slow;
};
