/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let minute = 0;
    const queue = [], visited = Array.from({ length: grid.length }, 
    () => new Array(grid[0].length).fill(0));

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] === 2){
                queue.push({
                    orange:[i,j],
                    time:0
                })
                visited[i][j] = 2
            }
        }
    }

    while(queue.length){
        let {orange, time} = queue.shift();

        minute = Math.max(minute, time);
        markRotten(grid, orange, queue, visited, time);
    }

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
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