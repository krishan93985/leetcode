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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let isValid = true;

    let helper = (node) => {
        if(!node){
            return { min:Number.MAX_SAFE_INTEGER, max:Number.MIN_SAFE_INTEGER }
        }

        let left = helper(node.left)
        let right = helper(node.right)

        if(left.max >= node.val || right.min <= node.val) isValid = false;

        return {
            min:left.min === Number.MAX_SAFE_INTEGER ? node.val : left.min,
            max:right.max=== Number.MIN_SAFE_INTEGER ? node.val : right.max,
        }
    }

    helper(root)

    return isValid;
};