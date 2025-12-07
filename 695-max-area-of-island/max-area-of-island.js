/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const row = grid.length, col = grid[0].length;
    const visited = Array.from({length:row}, () => new Array(col).fill(0));
    let area = 0;

    function sweepIsland(i, j){
        if(i >= row || i < 0 || j >= col || j < 0 || visited[i][j] || grid[i][j] !== 1) return 0;

        visited[i][j] = 1;

        return sweepIsland(i+1, j)
                    + sweepIsland(i, j+1)
                    + sweepIsland(i-1, j)
                    + sweepIsland(i, j-1)
                    + 1;
    }

    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(!visited[i][j] && grid[i][j] === 1){
                area = Math.max(
                    sweepIsland(i, j), area);
            }
        }
    }

    return area;
};