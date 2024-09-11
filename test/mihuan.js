// 假设有一个场景：在一个数字世界里，每个数字代表一个门，玩家从门 0 开始，逐步遇到数字增加的门。每个门上都有标记，一个数字 1 代表为一位守卫。玩家经过每扇门时，需要记录遇到的守卫数量。现在我们要计算玩家经过所有门时遇到的守卫总数。

// 1. 玩家从门 0 开始，逐步经过门 1、门 2、门 3...直到最后一扇门，即数字 n 对应的门。
// 2. 每次经过一扇门，玩家会查看门上的标记。如果标记含数字 1，表示门上有对应出现数字1个数的守卫，玩家需要记录下来。
// 3. 最终，玩家经过了所有门，需要统计遇到的守卫总数。


// 比较简单的思路,数字转化成字符串，然后匹配到对应的正则匹配个数，然后累加。时间复杂度较高
const record1 = (n) => {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        let str = i.toString()
        let matchArr = str.match(/1/g);
        if (matchArr) {      // 1的个数
            res += matchArr.length
        }
    }
    return res
}

// 运用数学方式
// 从低位开始，每一位上的数字，都有多少个1
// 比如 11 
// 在计算每个数字中 1 的出现次数时，我们将数字分解为三个部分：

// bigNum: 大于当前位数的部分。
// num: 当前位数字。
// smallNum: 小于当前位数的部分。
// 对于 11 来说，第一次遍历个位 bigNum = 1，num = 1，smallNum = 0。
// 第二次遍历十位 bigNum = 0，num = 1，smallNum = 1

const record2 = (n) => {
    let res = 0;
    let exp = 0;
    while (n > Math.pow(10, exp)) {
        let smallNum = n - Math.floor(n / Math.pow(10, exp)) * Math.pow(10, exp)
        let bigNum = Math.floor(n / Math.pow(10, exp + 1))
        let num = Math.floor(n / Math.pow(10, exp)) % 10
        if (num == 0) { // 当前位数字为0 bigNum决定1的个数
            res += bigNum * Math.pow(10, exp);
        } else if (num == 1) { // 当前位数字为1 bigNum决定1的个数 + smallNum决定1的个数+ 当前位的1
            res += bigNum * Math.pow(10, exp) + smallNum + 1;
        } else { // 当前位数字大于1 (bigNum+1)的个数 *当前的位数范围 1 是当前位包含的1的部分 比如说270 到7的时候，包含30个1
            res += (bigNum + 1) * Math.pow(10, exp);
        }
        exp++
    }
   return res
}

console.log(record1(270))
console.log(record2(270))