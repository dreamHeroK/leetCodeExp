// 翻转二叉树

var invertTree = function (root) {
    function reverseTree(root) {
        if (!root) {
            return
        }
        let left = root.left;
        root.left = root.right;
        root.right = left;
        reverseTree(root.left)
        reverseTree(root.right)
    }
    reverseTree(root)
    return root
};