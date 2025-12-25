/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let rows = board.length, cols = board[0].length;
    const visited = Array.from({ length:rows }, () => new Array(cols).fill(0));
    const dir = [[0,1],[0,-1],[1,0],[-1,0]]

    function sweep(i, j){
        if(i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] === 'X' || visited[i][j] === 1) return;

        visited[i][j] = 1;
        for(let d=0; d<4; d++){
            let [offI, offJ] = dir[d];
            sweep(i+offI, j+offJ)
        }

        board[i][j] = 'S'; //safe
    }

    for(let i=0; i<rows; i++){
        if(board[i][0] === 'O') sweep(i,0)
        if(board[i],[cols-1]) sweep(i,cols-1)
    }

    for(let j=0; j<cols; j++){
        if(board[0][j] === 'O') sweep(0,j)
        if(board[rows-1],[j]) sweep(rows-1,j)
    }

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(board[i][j] === 'O') board[i][j] = 'X'
            else if(board[i][j] === 'S') board[i][j] = 'O'
        }
    }
};