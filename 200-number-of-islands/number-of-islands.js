/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //traverse row wise
    //go right and down to each cell
    //use dfs
    const row = grid.length, col = grid[0].length;
    const visited = Array.from({length:row}, () => new Array(col).fill(0));
    let islands = 0;

    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(!visited[i][j] && grid[i][j] === "1"){
                islands++;
                sweepIsland(grid, visited, i, j, row, col)
            }
        }
    }

    return islands;
};

var sweepIsland = function(grid, visited, i, j, row, col){
    if(i >= row || i < 0 || j >= col || j < 0 || visited[i][j] || grid[i][j] !== "1") return;

    visited[i][j] = 1;

    sweepIsland(grid, visited, i+1, j, row, col);
    sweepIsland(grid, visited, i, j+1, row, col);
    sweepIsland(grid, visited, i-1, j, row, col);
    sweepIsland(grid, visited, i, j-1, row, col);
}