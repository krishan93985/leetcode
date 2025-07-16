/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let marked = [];
    for(let i=0; i<board.length; i++){
        marked[i] = []
        for(let j=0; j<board[i].length; j++){
            marked[i][j] = false;
        }
    }

    // console.log(marked)

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(sweepBoard(board, word, marked, i, j))
                return true;
        }
    }

    return false;
};

var sweepBoard = function(board, word, marked, i, j) {
    if(i < 0 || i >= board.length || j < 0 || j >= board[i].length) return false;
    if(marked[i][j] || word[0] !== board[i][j]) return false;

    // console.log(word, " ", board[i][j])
    if(word.length === 1 && word[0] === board[i][j])
        return true;

    
    marked[i][j] = true;
    let left = sweepBoard(board, word.slice(1), marked, i, j-1)
    let right = sweepBoard(board, word.slice(1), marked, i,j+1)
    let top = sweepBoard(board, word.slice(1), marked, i-1, j)
    let bottom = sweepBoard(board, word.slice(1), marked, i+1, j)

    if(left || right || top || bottom) return true;

    marked[i][j] = false;
    return false;
}