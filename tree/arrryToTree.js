function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const array2binary = (arr) => {
    if (!arr || !arr.length) {
        return null;
    }
    let index = 0;
    const queue = [];
    const len = arr.length;
    const head = new TreeNode(arr[index]);
    queue.push(head);

    while (index < len) {
        index++;
        const parent = queue.shift();
        if (arr[index] !== null && arr[index] !== undefined) {
            const node = new TreeNode(arr[index]);
            parent.left = node;
            queue.push(node);
        }

        index++;
        if (arr[index] !== null && arr[index] !== undefined) {
            const node = new TreeNode(arr[index]);
            parent.right = node;
            queue.push(node);
        }
    }
    return head;
};

module.exports = array2binary
const root = array2binary([3, 9, 20, null, null, 15, 7]);
// console.log(root)