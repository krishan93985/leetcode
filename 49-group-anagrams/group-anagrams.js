/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    const output = []
    const sortedStrs = [...strs];

    for(let i=0; i<sortedStrs.length; i++){
        let charArr = sortedStrs[i].split("");
        charArr.sort();
        sortedStrs[i] = charArr.join("");
    }

    for(let i=0; i<sortedStrs.length; i++){
        let exists = map.has(sortedStrs[i]);
        if(exists){
            let index = map.get(sortedStrs[i]);
            output[index].push(strs[i]);
        } else {
            output.push([strs[i]]);
            map.set(sortedStrs[i], output.length-1);
        }
    }

    return output;
};