// 七个不同的符号代表罗马数字，其值如下：

// 符号	值
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

var intToRoman = function (num) {
    let str = ''
    const MAP = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    }
    while (num > 0) {
        let key = Object.keys(MAP).sort((a, b) => b - a)
        for (let i = 0; i < key.length; i++) {
            if (num >= key[i]) {
                str += MAP[key[i]]
                num -= key[i]
                break
            }
        }
    }
    return str
};

console.log(intToRoman(3749))