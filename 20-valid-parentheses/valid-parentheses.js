/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map([
        [')','('],
        ['}','{'],
        [']','['],
    ])

    const stack = [];

    for(let char of s){
        if(map.has(char)){
            let top = stack[stack.length-1];
            if(!top || top !== map.get(char)) return false;

            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};