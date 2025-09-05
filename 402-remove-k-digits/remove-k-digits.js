/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(k >= num.length) return "0";

    // 1. push each number in a mon. inc order ( if not, remove the top )
    const stack = [];
    let counter = 0, i=0;
    while(counter < k && i < num.length){
        while(counter < k && stack.length && stack[stack.length-1] > parseInt(num[i])){
            stack.pop()
            counter++;
        }
        
        stack.push(parseInt(num[i++]))
    }

    // 2. push remaining elements as it is
    while(i < num.length){
        stack.push(parseInt(num[i++]));
    }

    while(counter < k){
        stack.pop()
        counter++;
    }

    // 3. create a string from stack 
    let result = ""
    while(stack.length){
        result = `${stack.pop()}${result}`
    }

    // 4. remove leading zeros
    result = result.replace(/^0+/,"");

    return result.length ? result : "0";
};