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
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;

    function getGoodNodes(node, max){
        if(!node) return 0;

        if(node.val >= max) {
            count++;
        }

        getGoodNodes(node.left, Math.max(max, node.val))
        getGoodNodes(node.right, Math.max(max, node.val))
    }

    getGoodNodes(root, Number.MIN_SAFE_INTEGER);

    return count;
};