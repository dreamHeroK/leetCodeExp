// 二叉树展开为链表
// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-interview-150
// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

const array2binary = require('./arrryToTree.js')
var flatten = function (root) {
    while (root) {
        if (!root.left) {
            root = root.right
        } else {
            let pre = root.left
            // 找到左子树最后一个右节点
            while (pre.right) {
                pre = pre.right
            }
            // 右子树拼接到左子树后面
            pre.right = root.right
            root.right = root.left
            root.left = null;
            // 下一个节点
            root = root.right
        }
    }
};

let root = array2binary([1, 2, 5, 3, 4, null, 6])
flatten(root)