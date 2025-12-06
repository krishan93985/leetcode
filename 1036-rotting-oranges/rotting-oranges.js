/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const visited = [], queue = []
    let minutes = 0;

    for(let i=0; i<grid.length; i++){
        visited.push([])
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] === 2){
                queue.push({
                    cell:{i,j},
                    minute:0
                })
                visited[i].push(true);
            } 
            else {
                visited[i].push(false)
            }
        }
    }

    while(queue.length){
        let {cell, minute} = queue.shift();
        let neighbors = [[0,1],[0,-1],[1,0],[-1,0]];

        minutes = Math.max(minute, minutes)
        for(let i=0; i<neighbors.length; i++){
            let x = cell.i + neighbors[i][0], y = cell.j + neighbors[i][1];
            if(x >=0 && y >=0 && x < grid.length && y < grid[0].length && !visited[x][y] && grid[x][y] === 1){
                visited[x][y] = true;
                queue.push({
                    cell:{i:x,j:y},
                    minute: minute+1
                })
                grid[x][y] = 2;
            }
        }
    }

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] === 1){
                return -1;
            }
        }
    }

    return minutes;
};