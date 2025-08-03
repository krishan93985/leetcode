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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let output = [];

    function pathSumHelper(root, sumArr, sum){
        if(!root){
            return null;
        }  

        let currSumArr = [...sumArr, root.val]

        let left = pathSumHelper(root.left, currSumArr , sum-root.val)
        let right = pathSumHelper(root.right, currSumArr, sum-root.val)

        if(!left && !right && sum-root.val === 0){
            output.push(currSumArr)
        }

        return root;
    }

    pathSumHelper(root, [], targetSum)

    return output;
};