// 从中序与后序遍历序列构造二叉树
// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null
}
var buildTree = function (inorder, postorder) {
    // 后续遍历最后一个节点为根节点
    let rootIdx = postorder.length - 1;
    let root = new TreeNode(postorder[rootIdx])
    function buildChild(node, tree) {
        // 中序遍历根节点左边为左子树 右边为右子树
        let inorderRoodIdx = tree.findIndex(item => item === node.val)
        let leftTree = tree.slice(0, inorderRoodIdx)
        let rightTree = tree.slice(inorderRoodIdx + 1)
        rootIdx--;
        // 没有子树的时候结束
        if (!leftTree.length && !rightTree.length) {
            return;
        }
        if (rightTree.length) {
            node.right = new TreeNode(postorder[rootIdx])
            buildChild(node.right, rightTree)
        }
        if (leftTree.length) {
            node.left = new TreeNode(postorder[rootIdx])
            buildChild(node.left, leftTree)
        }
    }
    buildChild(root, inorder)
    console.log(root)
    return root
};

buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])