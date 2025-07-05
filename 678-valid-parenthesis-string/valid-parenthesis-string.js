/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftMin = 0, leftMax = 0;

    for(let char of s){
        if(char === "("){
            leftMin++;
            leftMax++;
        } else if(char === ")"){
            leftMin--;
            leftMax--;
        } else{
            leftMax++;
            leftMin--;
        } 

        if(leftMax < 0) return false;
        if(leftMin < 0) leftMin = 0;
    }

    return leftMin === 0;
};