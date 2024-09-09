const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let lenthCheck = (str) => {
        return str.length > 8;
    }

    let typeCheck = (str) => {
        let match = 0;
        const reg1 = /[A-Z]/g
        const reg2 = /[a-z]/g
        const reg3 = /[0-9]/g
        const reg4 = /[!@#$%^&*()_+]/g
        if (reg1.test(str)) {
            match++;
        }
        if (reg2.test(str)) {
            match++;
        }
        if (reg3.test(str)) {
            match++;
        }
        if (reg4.test(str)) {
            match++;
        }
        if (match > 2) {
            return true
        } else {
            return false
        }

    }

    const repeactCheck = (str) => {
        let set = new Set()
        for (let i = 0; i < str.length - 3; i++) {
            console.log([...set])
            if (set.has(str.slice(i, i + 3))) {
                return false
            } else {
                set.add(str.slice(i, i + 3))
            }
        }
        return false
    }
    while (line = await readline()) {
        let str = line;
        let res

        if (lenthCheck(str) && typeCheck(str) && repeactCheck(str)) {
            res = 'OK'
        } else {
            res = 'NG'
        }
        console.log(res)
    }
}()
