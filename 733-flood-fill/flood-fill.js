/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const rows = image.length, cols = image[0].length;
    const visited = Array.from({ length:rows }, () => new Array(cols).fill(false))
    const firstColor = image[sr][sc];
    const dir = [[0,1],[0,-1],[1,0],[-1,0]]

    if(color === firstColor) return image;

    function sweep(i, j){
        if(i < 0 || j < 0 || i === rows || j === cols || visited[i][j] || image[i][j] !== firstColor) return;

        visited[i][j] = true;
        image[i][j] = color;

        for(let k=0; k<4; k++){
            sweep(i+dir[k][0], j+dir[k][1])
        }
    }

    sweep(sr,sc);

    return image;
}