/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    const opening = ["(","{","["];
    const closing = [")","}","]"];
    const openingBracketMap = new Map([
        ['(',')'],
        ['{','}'],
        ['[',']'],
    ])

    const closingBracketMap = new Map([
        [')','('],
        ['}','{'],
        [']','['],
    ])

    for(let char of s){
        if(openingBracketMap.get(char)){
            stack.push(char);
        } else if(closingBracketMap.get(char)){
            const top = stack.at(stack.length - 1);
            if(top !== closingBracketMap.get(char)) return false;
            stack.pop();    
        } else
            return false;
    }

    return stack.length === 0;
};