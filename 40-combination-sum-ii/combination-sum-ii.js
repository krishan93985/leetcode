/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const output = [], arr = []
    candidates.sort((a,b) => a-b);
    getCombinationSum(candidates, target, arr, 0, output)

    return output;
};

var getCombinationSum = function(candidates, target, arr, idx, output) {
    if(target === 0){
        output.push([...arr])
        return;
    }

    for(let i=idx; i<candidates.length; i++){
        const el = candidates[i]
        if(i !== idx && el === candidates[i-1]) continue;
        
        if(target >= el){
            arr.push(el);
            getCombinationSum(candidates, target-el, arr, i+1, output)
            arr.pop();
        }
    }
}