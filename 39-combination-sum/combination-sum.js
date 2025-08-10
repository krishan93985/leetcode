/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = []

    var comboHelper = function(idx, sum, combos){
        if(idx === candidates.length || sum > target){
            if(sum === target) output.push([...combos])
            return;
        }

        combos.push(candidates[idx])
        comboHelper(idx, sum+candidates[idx], combos);

        combos.pop(candidates[idx]);
        comboHelper(idx+1, sum, combos);
    }

    comboHelper(0, 0, [])

    return output;
}