const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let map1 = []
    let map2 = []
    while (line = await readline()) {
        let len = line.split('\\').length;
        let s = line.split('\\')[len - 1]
        let data = s.split(' ')[0].slice(-16) + ' ' + s.split(' ')[1]
        if (!map1.includes(data)) {
            map2.push(1);
            map1.push(data)
        } else {
            map2[map1.indexOf(data)]++
        }
    }
    let arr1 = map1.slice(-8);
    let arr2 = map2.slice(-8);

    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i] + '' + arr2[i])
    }

}()
