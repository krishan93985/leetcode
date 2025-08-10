/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let output = []
    let map = new Map();

    for(let i=0; i<s.length; i++){
        map.set(s[i], i)
    }

    let left=0;
    while(left<s.length){
        let right = map.get(s[left]);
        let start = left;
        while(left <= right){
            right = Math.max(right, map.get(s[left]))
            left++;
        }
        
        output.push(right - start + 1)
    }

    return output;
}