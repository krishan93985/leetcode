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
var isBalanced = function(root) {
    if(!root) return true;
    let balanced = { value:true }
    checkBalanced(root, balanced)

    return balanced.value;
};

var checkBalanced = function(root, balanced){
    if(!root) return 0;

    let left = checkBalanced(root.left, balanced);
    let right = checkBalanced(root.right, balanced);

    if(Math.abs(left - right) > 1) balanced.value = false

    return Math.max(left,right) + 1;
}