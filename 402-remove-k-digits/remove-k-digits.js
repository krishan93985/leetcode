/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(k >= num.length) return "0";

    let stack = [], removed = 0
    for(let char of num){
        while(removed < k && stack.length && stack[stack.length - 1] >  parseInt(char)){
            stack.pop()
            removed++;
        }

        stack.push(parseInt(char))
    }

    let result = ""

    while(stack.length && removed < k){
        let digit = stack.pop()
        removed++;
    }

    while(stack.length){
        let digit = stack.pop()
        result=`${digit}${result}`
    }

    result = result.replace(/^0+/,'');

    return result ? result : "0";
};