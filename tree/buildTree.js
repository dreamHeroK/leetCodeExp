// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/?envType=study-plan-v2&envId=top-interview-150
// 105. 从前序与中序遍历序列构造二叉树
// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function (preorder, inorder) {
    // 前序遍历的第一个节点是根节点
    let root = new TreeNode(preorder[0])
    function build(root, tree) {
        let rootPoint = preorder[0]
        // console.log(root, 'root')
        let rootIdx = tree.findIndex(item => item === rootPoint)
        // 中序遍历根节点左边的树是左子树，右边的树是右子树
        let leftTree = tree.slice(0, rootIdx)
        let rightTree = tree.slice(rootIdx + 1)

        preorder.splice(0, 1)
        if (!leftTree.length && !rightTree.length) {
            return;
        }
        if (leftTree.length > 0) {
            root.left = new TreeNode(preorder[0])
            build(root.left, leftTree)
        }
        if (rightTree.length > 0) {
            root.right = new TreeNode(preorder[0])
            build(root.right, rightTree)
        }
    }
    build(root, inorder)
    return root
};
buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])