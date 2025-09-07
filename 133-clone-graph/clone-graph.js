/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    const visited = new Map()

    const cloneGraphHelper = (currNode) => {
        if(!currNode) return null;

        let root = new _Node(currNode.val);
        visited.set(currNode.val, root);

        for(let n of currNode.neighbors){ 
            if(!visited.has(n.val)){
                visited.set(n.val, cloneGraphHelper(n));
            }

            root.neighbors.push(visited.get(n.val))
        }

        return root;
    }

    visited.set(node.val, cloneGraphHelper(node))

    return visited.get(node.val);
};