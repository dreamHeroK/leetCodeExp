// 罗马数字转整数
// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

var romanToInt = function (s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let ans = 0;
    let len = s.length;
    for (let i = 0; i < len - 1; i++) {
        if (s[i] == 'I' && (s[i + 1] == 'V' || s[i + 1] == 'X')) {
            ans += map[s[i + 1]] - map[s[i]];
            i++;
        } else if (s[i] == 'X' && (s[i + 1] == 'L' || s[i + 1] == 'C')) {
            ans += map[s[i + 1]] - map[s[i]];
            i++;
        } else if (s[i] == 'C' && (s[i + 1] == 'D' || s[i + 1] == 'M')) {
            ans += map[s[i + 1]] - map[s[i]];
            i++;
        } else {
            ans += map[s[i]];
        }
        if (i == len - 1) {
            return ans
        }
    }
    return ans + map[s[len - 1]]
};
console.log(romanToInt("III"))