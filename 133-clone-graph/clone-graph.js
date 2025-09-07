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

    const visited = new Map();
    const queue = [node];

    // create the clone for the root
    visited.set(node.val, new _Node(node.val));

    while (queue.length) {
       let oldNode = queue.shift();
       let newNode = visited.get(oldNode.val)

       for(let n of oldNode.neighbors){
        if(!visited.has(n.val)){
            visited.set(n.val,new _Node(n.val))
            queue.push(n);
        }

        newNode.neighbors.push(visited.get(n.val))
       }
    }

    return visited.get(node.val);
};