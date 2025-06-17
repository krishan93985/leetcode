/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let result = {
        lca: null
    }
    
    const ans = lca(root, p.val, q.val, result)

    // console.log(ans.pExists, ans.qExists, result.lca)

    return result.lca;
};

const lca = (root, p, q, result) => {
    if(!root) return {pExists:false, qExists:false};

    const left = lca(root.left, p, q, result);
    const right = lca(root.right, p, q, result);
    const pExists = (left.pExists || right.pExists);
    const qExists = (left.qExists || right.qExists);

    const finalPExists = pExists || root.val === p;
    const finalQExists = qExists || root.val === q;
    // console.log({finalPExists, finalQExists, val: root.val, p, q})

    if(finalPExists && finalQExists)
        result.lca = result.lca ? result.lca : root;

    // console.log({lca:result.lca})

    return {
        pExists:finalPExists,
        qExists:finalQExists,
    }
}