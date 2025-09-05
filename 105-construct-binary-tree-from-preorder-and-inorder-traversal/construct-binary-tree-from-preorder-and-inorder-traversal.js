/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
   let inorderMap = new Map();
   let preIdx = 0;

   for(let i=0; i<inorder.length; i++){
    inorderMap.set(inorder[i], i)
   }
   
   const treeHelper = (s, e) => {
    if(s > e) return null;

    let root = new TreeNode(preorder[preIdx]);
    preIdx++;

    let inorderIdx = inorderMap.get(root.val); // root idx

    root.left = treeHelper(s, inorderIdx-1);
    root.right = treeHelper(inorderIdx+1, e);

    return root;
   }

   return treeHelper(0, inorder.length-1)
};