// 2306. 公司命名
// 给你一个字符串数组 ideas 表示在公司命名过程中使用的名字列表。公司命名流程如下：

// 从 ideas 中选择 2 个 不同 名字，称为 ideaA 和 ideaB 。
// 交换 ideaA 和 ideaB 的首字母。
// 如果得到的两个新名字 都 不在 ideas 中，那么 ideaA ideaB（串联 ideaA 和 ideaB ，中间用一个空格分隔）是一个有效的公司名字。
// 否则，不是一个有效的名字。
// 返回 不同 且有效的公司名字的数目。

var distinctNames = function (ideas) {
    let res = 0;
    let map = new Map();
    for (let i = 0; i < ideas.length; i++) {
        let first = ideas[i][0];
        let str = ideas[i].slice(1);
        if (map.has(first)) {
            map.get(first).add(str);
        } else {
            map.set(first, new Set([str]));
        }
    }
    let arr = Array.from(map.values());
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let set1 = arr[i];
            let set2 = arr[j];
            let count1 = 0;
            let count2 = 0;
            for (let item of set1) {
                if (set2.has(item)) count1++;
            }
            for (let item of set2) {
                if (set1.has(item)) count2++;
            }
            res += (set1.size - count1) * (set2.size - count2) * 2;
        }
    }
    return res;
};