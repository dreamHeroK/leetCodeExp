// 长度最小的子数组

// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其总和大于等于 target 的长度最小的 子数组
//  [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。


// 超时了。从左到右遍历
var minSubArrayLen = function (target, nums) {
    let len = nums.length;
    let left = 0;
    let n = 1;

    while (n <= len) {
        let sum = 0;
        for (let k = 0; k < n; k++) {
            sum += nums[left + k]
        }
        if (sum >= target) {
            return n
        }
        left++
        if (left + n > len) {
            left = 0;
            n++
        }
    }
    return 0
};

// 小优化一下 还是超时了
var minSubArrayLen2 = function (target, nums) {
    let len = nums.length;
    let left = 0;
    let n = 1;
    let sum = 0
    while (n <= len) {

        if (sum == 0) {
            for (let k = 0; k < n; k++) {
                sum += nums[left + k]
            }
        } else {
            sum = sum - nums[left - 1] + nums[left + n - 1]
        }
        if (sum >= target) {
            return n
        }
        left++
        if (left + n > len) {
            left = 0;
            n++;
            sum = 0
        }
    }
    return 0
};

//  用数组存一下和  还是超时了
var minSubArrayLen3 = function (target, nums) {
    let len = nums.length;
    let left = 0;
    let n = 1;
    let sum = new Array(len).fill(nums[0])
    let curSum = sum[0]
    while (n <= len) {
        if (left > 0) {
            curSum = curSum - nums[left - 1] + nums[left + n - 1]
        }
        if (curSum >= target) {
            return n
        }
        left++
        if (left + n > len) {
            left = 0;
            n++;
            sum[n - 1] = sum[n - 2] + nums[n - 1]
            curSum = sum[n - 1]
        }
    }
    return 0
};

// 再别说了 滑动窗口呗
var minSubArrayLen3 = function (target, nums) {
    let len = nums.length;
    let left = 0;
    let right = 0;
    let sum = 0;
    let ans = 0
    while (right < len) {
        sum += nums[right]
        while (sum >= target) {
            ans = ans == 0 ? right - left + 1 : Math.min(ans, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return ans
};

console.log(minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]))