/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const adjList = Array.from({ length: numCourses }, () => new Array());

    for(let pre of prerequisites){
        adjList[pre[0]].push(pre[1]);
    }

    const visited = new Array(numCourses).fill(0)
    const currPath = new Array(numCourses).fill(0)

    function detectCycle(node){
        visited[node] = 1;
        currPath[node] = 1;

        for(let edge of adjList[node]){
            if(!visited[edge]) {
                if(detectCycle(edge)) return true;
            } else if(currPath[edge] === 1){
                return true;
            }
        }

        currPath[node] = 0;
        return false;        
    }

    for(let i=0; i<numCourses; i++){
        if(!visited[i] && detectCycle(i)) return [];
    }

    const newVisited = new Array(numCourses).fill(0)
    const validOrder = []

    function dfs(node){
        newVisited[node] = 1;

        for(let edge of adjList[node]){
            if(!newVisited[edge]) dfs(edge)
        }
        
        validOrder.push(node)
    }

    for(let i=0; i<numCourses; i++){
        if(!newVisited[i]) dfs(i);
    }

    return validOrder;
};