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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];

    while(queue.length){
        let size = queue.length;
        let firstElementFound = false;

        while(size){
            const node = queue.shift();
            if(!firstElementFound){
                result.push(node.val);
                firstElementFound = true;
            }

            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left);
            size--;
        }
    }

    return result;
};