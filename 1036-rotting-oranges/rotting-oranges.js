/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let minute = 0;
    const queue = [], visited = [], n = grid.length, m = grid[0].length;

    for(let i=0; i<n; i++){
        visited.push([])
        for(let j=0; j<m; j++){
            if(grid[i][j] === 2){
                queue.push({
                    orange:[i,j],
                    time:0
                })
                visited[i][j] = 2
            } else {
                visited[i][j] = 0;
            }
        }
    }

    const drow = [-1,0,1,0];
    const dcol = [0,1,0,-1]

    while(queue.length){
        let {orange:[row,col], time} = queue.shift();

        minute = Math.max(minute, time);
        for(let i=0; i<4; i++){
            let nrow = row + drow[i];
            let ncol = col + dcol[i];

            if(nrow >= 0 && ncol >= 0 && nrow < n && ncol < m && visited[nrow][ncol] !== 2 && grid[nrow][ncol] === 1){
                queue.push({
                    orange:[nrow,ncol],
                    time:time+1
                })
                visited[nrow][ncol] = 2;
            }
        }
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] === 1 && visited[i][j] !== 2){
                return -1;
            }
        }
    }

    return minute;
};

var markRotten = function(grid, [i,j], queue, visited, time){
    if(i+1 < grid.length && grid[i+1][j] === 1 && visited[i+1][j] !== 2){
        visited[i+1][j] = 2;
        queue.push({
            orange:[i+1,j],
            time:time+1
        })
    }

    if(j+1 < grid[i].length && grid[i][j+1] === 1 && visited[i][j+1] !== 2){
        visited[i][j+1] = 2;
        queue.push({
            orange:[i,j+1],
            time:time+1
        })
    }

    if(i-1 >= 0 && grid[i-1][j] === 1 && visited[i-1][j] !== 2){
        visited[i-1][j] = 2;
        queue.push({
            orange:[i-1,j],
            time:time+1
        })
    }

    if(j-1 >= 0 && grid[i][j-1] === 1 && visited[i][j-1] !== 2){
        visited[i][j-1] = 2;
        queue.push({
            orange:[i,j-1],
            time:time+1
        })
    }
}