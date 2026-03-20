var findKDistantIndices = function (nums, key, k) {
    let res = [], j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            j = Math.max(i - k, j);
            while (j < Math.min(i + k + 1, nums.length)) {
                res.push(j)
                j++
            }
        }
    }
    return res
};