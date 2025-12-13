/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const colored = new Array(n).fill(-1);
    const invertColors = [1,0]

    function dfs(node, color){
        colored[node] = color;

        for(let i=0; i<graph[node].length; i++){
            let currNode = graph[node][i]
            if(colored[currNode] === -1){
                if(!dfs(currNode, invertColors[color])) return false
            } else if(colored[currNode] === color) {
                return false;
            }
        }

        return true;
    }

    //colors are 0 & 1
    for(let i=0; i<n; i++){
        if(colored[i] === -1){
            if(!dfs(i, 0)) return false;
        }
    }
    
    return true;
};