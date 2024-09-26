// 2535. 数组元素和与数字和的绝对差
// 输入：nums = [1,2,3,4]
// 输出：0
// 解释：
// nums 的元素和是 1 + 2 + 3 + 4 = 10 。
// nums 的数字和是 1 + 2 + 3 + 4 = 10 。
// 元素和与数字和的绝对差是 |10 - 10| = 0 。

var differenceOfSum = function (nums) {
    let elSum = 0;
    let numSum = 0;
    for (let i = 0; i < nums.length; i++) {
        elSum += nums[i];
        let num = nums[i];
        while (num > 0) {
            numSum += num % 10;
            num = Math.floor(num / 10);
        }
    }
    return Math.abs(elSum - numSum);
};