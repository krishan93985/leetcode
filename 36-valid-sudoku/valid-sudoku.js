/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let row of board){
        const rowMap = new Map()
        for(let box of row){
            if(box !== "."){
                if(rowMap.has(box) || parseInt(box) > 9 || parseInt(box) < 1)
                    return false;
                
                rowMap.set(box, 1);
            }
        }
    }

    for(let i=0; i<board.length; i++){
        const colMap = new Map()
        for(let j=0; j<board.length; j++){
            let box = board[j][i];
            if(box !== "." || parseInt(box) > 9 || parseInt(box) < 1){
                if(colMap.has(box))
                    return false;
                
                colMap.set(box, 1);
            }
        }
    }

    for(let i=0; i<board.length; i+=3){
        for(let j=0; j<board.length; j+=3){
            let gridMap = new Map();

            for(let k=i; k<i+3; k++){
                for(let l=j; l<j+3; l++){
                    let box = board[k][l];
                    if(box !== "."){
                        if(gridMap.has(box) || parseInt(box) > 9 || parseInt(box) < 1)
                            return false;
                        
                        gridMap.set(box, 1);
                    }
                }
            }
        }
    }

    return true;
};