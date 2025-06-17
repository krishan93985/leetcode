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
var isValidBST = function(root, rangeMin = Number.MIN_SAFE_INTEGER, rangeMax = Number.MAX_SAFE_INTEGER) {
    if(!root) return true;
    const val = root.val;

    const left = isValidBST(root.left, rangeMin, val);
    const right = isValidBST(root.right, val, rangeMax);

    const nodeValid = val > rangeMin && val < rangeMax;
    console.log({nodeValid})
    
    return left && right && nodeValid;
};