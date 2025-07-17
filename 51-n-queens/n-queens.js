/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const output = [], board = []
    const lDig = new Set(), rDig = new Set(), colSet = new Set();

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
            if(!colSet.has(j) && !lDig.has(i-j) && !rDig.has(i+j)){
                colSet.add(j);
                lDig.add(i-j);
                rDig.add(i+j);
                board[i][j] = 'Q';
                placeNQueens(i+1);
                colSet.delete(j);
                lDig.delete(i-j);
                rDig.delete(i+j);
                board[i][j] = '.';
            }
        }        
    }

    placeNQueens(0)

    return output;
};