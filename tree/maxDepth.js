// 深度二叉树

var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    let res = []
    let num = 0;
    function selectTree(root, num) {
        if (!root) {
            res.push(num)
            return;
        }
        num++
        selectTree(root.left, num)
        selectTree(root.right, num)
    }
    selectTree(root, num)
    return Math.max(...res)
};