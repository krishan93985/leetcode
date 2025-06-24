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
var maxPathSum = function(root) {
    //curr path val of node
    //max val overall
    let currSum = 0, max = -1001;

    function postOrder(root){
        if(!root) return 0;

        let leftSum = postOrder(root.left);
        let rightSum = postOrder(root.right);

        let currSum = leftSum + rightSum + root.val;
        let currLeftSum = leftSum + root.val;
        let currRightSum = rightSum + root.val;
        max = Math.max(currSum, currLeftSum, currRightSum, max, root.val);

        console.log({
            leftSum,
            rightSum,
            currLeftSum,
            currRightSum,
            max
        })

        return Math.max(currLeftSum, currRightSum, root.val)
    }

    postOrder(root)
    
    return max;
};