const array2binary = require('./arrryToTree.js')

// 是否相同树
var isSameTree = function (p, q) {
    console.log(p, q, 'ppqq')
    let res = true
    function eachTree(p, q) {
        if (!p && q || p && !q) {
            res = false
            return
        }
        if (!p && !q) {
            return
        }
        if (p.val !== q.val) {
            res = false
        }
        eachTree(p.left, q.left)
        eachTree(p.right, q.right)
    }
    eachTree(p, q)
    return res
};

let root1 = array2binary([1, 2, 1])
let root2 = array2binary([1, 1, 2])

console.log(isSameTree(root1, root2))