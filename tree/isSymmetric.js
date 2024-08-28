// https://leetcode.cn/problems/symmetric-tree/?envType=study-plan-v2&envId=top-interview-150 
// 对称二叉树
const array2binary = require('./arrryToTree.js')

//  。。。自己写的 转成数组首尾双指针比较
var isSymmetric = function (root) {
    let arr = []
    let i = 0;
    function rootToArray(root, i) {
        if (!root) {
            if (arr[i]) {
                arr[i].push('|')
            } else {
                arr[i] = ['|']
            }
            return;
        }
        if (!arr[i]) {
            arr[i] = [root.val]
        } else {
            arr[i].push(root.val)
        }
        rootToArray(root.left, i + 1)
        rootToArray(root.right, i + 1)
    }
    rootToArray(root, i)
    console.log(arr, 'arr')
    let res = true
    arr.forEach(item => {
        if (item.length > 1 && item.length % 2 !== 0) {
            console.log('init')
            res = false
        }
        let start = 0;
        let end = item.length - 1;
        while (start < end) {

            if (item[start] !== item[end]) {
                res = false
            }
            start++
            end--
        }
    })
    console.log(res, 'res')
    return res
};


//  深度遍历比较左子树和右子树
var isSymmetric = function (root) {
    function check(root1, root2) {
        if (!root1 && !root2) {
            return true
        }
        if (!root1 || !root2) {
            return false
        }
        return root1.val === root2.val && check(root1.left, root2.right) && check(root1.right, root2.left)
    }
    return check(root, root);
};

let root = array2binary([1, 2, 2, 3, 4, 4, 3])
isSymmetric(root)