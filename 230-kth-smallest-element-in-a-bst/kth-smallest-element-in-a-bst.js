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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let helper = {
        index:0
    }

    kthSmallestHelper(root, k, helper)

    return helper.val;
};

var kthSmallestHelper = (root, k, helper) => {
    if(!root) return;

    kthSmallestHelper(root.left, k, helper)
    if(helper.val) return helper

    helper.index++;
    if(helper.index === k){
        helper.val = root.val;
        return;
    }

    kthSmallestHelper(root.right, k, helper)
};