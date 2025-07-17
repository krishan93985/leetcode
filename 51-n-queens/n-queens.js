/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const output = [], board = []

    for(let i=0; i<n; i++){
        board.push([])
        for(let j=0; j<n; j++){
            board[i][j] = "."
        }
    }

    var placeNQueens = function(i) {
        if(i === n){
            output.push(board.map(arr => arr.join("")));
            return;
        }

        for(let j=0; j<n; j++){
            if(boxValid(i,j,n,board)){
                board[i][j] = 'Q';
                placeNQueens(i+1);
                board[i][j] = '.';
            }
        }        
    }

    placeNQueens(0)

    return output;
};

var boxValid = function(i, j, n, board) {
    //validate column
    for(let k=0; k<n; k++)
        if(board[k][j] === 'Q') return false;

    //left diagonal
    let k=i, l=j;
    while(k >= 0 && l >=0 && k<n && l<n){
        if(board[k][l] === 'Q') return false;
        k--; l--;
    }

    k=i, l=j;
    while(k >=0 && l>=0 && k<n && l<n){
        if(board[k][l] === 'Q') return false;
        k--; l++;
    }  

    return true;
}