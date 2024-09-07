// HJ17 坐标移动

// 开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，
// 从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。

// 输入：

// 合法坐标为A(或者D或者W或者S) + 数字（两位以内）

// 坐标之间以;分隔。

// 非法坐标点需要进行丢弃。如AA10;  A1A;  $%$;  YAD; 等。

// 下面是一个简单的例子 如：

// A10;S20;W10;D30;X;A1A;B10A11;;A10;

// 处理过程：

// 起点（0,0）

// +   A10   =  （-10,0）

// +   S20   =  (-10,-20)

// +   W10  =  (-10,-10)

// +   D30  =  (20,-10)

// +   x    =  无效

// +   A1A   =  无效

// +   B10A11   =  无效

// +  一个空 不影响

// +   A10  =  (10,-10)

// 结果 （10， -10）
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let start = [0, 0];
    const Astrategy = (num) => {
        start[0] -= num;
    }
    const Sstrategy = (num) => {
        start[1] -= num;
    }
    const Wstrategy = (num) => {
        start[1] += num;
    }
    const Dstrategy = (num) => {
        start[0] += num;
    }

    const reg = /^[AWSD][0-9]{1,2}$/g // 很奇怪 牛客上面这个正则一直有问题
    while (line = await readline()) {
        let moves = line.split(';');
        moves.forEach(item => {
            if (item.match(reg)) {
                let num = Number(item.slice(1))
                switch (item[0]) {
                    case 'A':
                        Astrategy(num);
                        break;
                    case 'S':
                        Sstrategy(num);
                        break;
                    case 'W':
                        Wstrategy(num);
                        break;
                    case 'D':
                        Dstrategy(num);
                        break;
                    default:
                        break;
                }

            }
        });
    }
    console.log('(' + start.join(',') + ')')

}()


const moveIndex = (str) => {
    let moves = str.split(';');
    let start = [0, 0];
    const Astrategy = (num) => {
        start[0] -= num;
    }
    const Sstrategy = (num) => {
        start[1] -= num;
    }
    const Wstrategy = (num) => {
        start[1] += num;
    }
    const Dstrategy = (num) => {
        start[0] += num;
    }
    const reg = /^[AWSD][0-9]{1,2}$/g
    moves.forEach(item => {
        if (item.match(reg)) {

            let num = Number(item.slice(1))
            switch (item[0]) {
                case 'A':
                    Astrategy(num);
                    break;
                case 'S':
                    Sstrategy(num);
                    break;
                case 'W':
                    Wstrategy(num);
                    break;
                case 'D':
                    Dstrategy(num);
                    break;
                default:
                    break;
            }

        }
    });
    console.log('(' + start.join(',') + ')')
}

moveIndex('A10;S20;W10;D30;X;A1A;B10A11;;A10;')

