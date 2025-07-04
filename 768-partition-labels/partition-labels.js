/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const m = new Map();
    for(let char of s)
        m.set(char, (m.get(char) || 0) + 1)

    const currM = new Map(), result = [];
    let len = 0;
    for(let char of s){
        currM.set(char, (currM.get(char) || 0) + 1);
        len++;

        if(isFreqMatched(currM, m)){
            result.push(len);
            len = 0;
        }
    }

    return result;
};

var isFreqMatched = function(m1, m2){
    for(let [key, value] of m1.entries()){
        if(value !== m2.get(key)) return false
    }

    return true;
}