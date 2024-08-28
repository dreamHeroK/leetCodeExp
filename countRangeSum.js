var countRangeSum = function (nums, lower, upper) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let n = i
        while (n < nums.length) {
            let num = 0
            for (let j = i; j <= n; j++) {
                num += nums[j]
            }
            if (num >= lower && num <= upper) {
                res.push([i, n])
            }
            n++
        }

    }
    return res.length
};