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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return root;

    if(root.val === key){
        const rightMost = findRightMost(root.left);
        if(rightMost) {
            rightMost.right = root.right;
            return root.left;
        }

        return root.right;
    } else if(root.val > key){
        root.left = deleteNode(root.left, key)
    } else{
        root.right = deleteNode(root.right, key)
    }

    return root;
};

var findRightMost = function(root, keyNode){
    if(!root) return root;

    let rightMost = findRightMost(root.right);

    return rightMost || root;
}