/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = []
    const arr = []
    getCombinationSum(candidates,0, arr, target, output);

    return output;
};

var getCombinationSum = function(candidates, idx, arr, target, output) {
    if(idx === candidates.length){
        if(target === 0)
            output.push([...arr]);
        return;
    }

    if(target >= candidates[idx]){
        arr.push(candidates[idx])
        getCombinationSum(candidates, idx, arr, target - candidates[idx], output)
        arr.pop()
    }

    getCombinationSum(candidates, idx+1, arr, target, output)
}