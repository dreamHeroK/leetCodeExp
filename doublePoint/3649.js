var perfectPairs = function (nums) {
    let newNums=nums.map(item => Math.abs(item)).sort((a, b) => a - b);
    let i0 = 0, i1 = 1, res = 0,len=newNums.length;
    while (i1 < len) {
        if (newNums[i1] - newNums[i0] <= newNums[i0]) {
            res+=i1-i0;
            i1++
        } else {
            i0++;
            if(i0===i1){
                i1++
            }
        }
    }
    return res;
};

let nums = [-3,2,-1,4]
console.log(perfectPairs(nums));
