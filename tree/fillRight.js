// 填充每个节点的下一个右侧节点指针 II
// 给定一个二叉树：

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL 。

// 初始状态下，所有 next 指针都被设置为 NULL 。

// 。。。。直接一个转二维数组，然后指向数组右侧下标 简单男孩
var connect = function (root) {
    let arr = []
    let i = 0;
    setNext(root, i, arr)
    arr.forEach((item, n) => {
        item.forEach((node, idx) => {
            if (idx == item.length - 1) {
                return
            }
            node.next = item[idx + 1];
        })
    })
    console.log(arr, 'arrr')
    return root;
};

function setNext(node, i, arr) {
    if (!node) {
        return
    }
    if (!arr[i]) {
        arr[i] = [node]
    } else {
        arr[i].push(node)
    }
    i++;
    setNext(node.left, i, arr)
    setNext(node.right, i, arr)
}

//  层次遍历
function connect2(root) {
    if (!root) {
        return null
    }
    const queue = [root]
    while (queue.length) {
        const n = queue.length;
        let last = null;
        for (let i = 1; i <= n; i++) {
            const node = queue.shift()
            if (last) { // 如果上一个节点存在，那么当前节点就是上一个节点的next
                last.next = node
            }
            last = node
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return root
}

// 使用已建立的 next 指针

function connect3(root) {
    if (!root) {
        return null
    }
    let start = root
    let last = null
    let nextStart = null
    function hanldeP(p) {
        if (last) {
            last.next = p
        }
        if (!nextStart) {
            nextStart = p
        }
        last = p
    }
    while (start !== null) {
        last = null;
        nextStart = null;
        for (let p = start; p !== null; p = p.next) {
            if (p.left) {
                hanldeP(p.left)
            }
            if (p.right) {
                hanldeP(p.right)
            }
        }
        start = nextStart
    }
    return root
}