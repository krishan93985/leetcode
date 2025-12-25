/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let rows = heights.length, cols = heights[0].length
    const visitedP = Array.from({ length:rows }, () => new Array(cols).fill(0))
    const visitedA = Array.from({ length:rows }, () => new Array(cols).fill(0))

    function sweepFromOcean(i, j, visited, prevHeight){
        // dead end
        if(i < 0 || j < 0 || i >= rows || j >= cols || visited[i][j] === 1 || heights[i][j] < prevHeight) return;

        //mark reachable cell
        visited[i][j] = 1;

        //sweep in all 4 directions
        let row = [0,0,1,-1], col = [1,-1,0,0]
        for(let n=0; n < 4; n++){
            let newI = i+row[n], newJ = j+col[n]
            sweepFromOcean(newI, newJ, visited, heights[i][j])
        }
    }

    const coords = []

    for(let i=0; i<rows; i++)
        sweepFromOcean(i, 0, visitedP, -1) 
    for(let j=0; j<cols; j++)
        sweepFromOcean(0, j, visitedP, -1) 
    for(let i=0; i<rows; i++)
        sweepFromOcean(i, cols-1, visitedA, -1) 
    for(let j=0; j<cols; j++)
        sweepFromOcean(rows-1, j, visitedA, -1) 

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(visitedP[i][j] === 1 && visitedA[i][j] === 1) coords.push([i,j])
        }
    }

    return coords;
};