/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const output = [];
    generateSubsets(nums, 0, [], output);
    return output;
};

var generateSubsets = function(nums, idx, curr, output){
    if(idx >= nums.length){
        console.log(curr)
        output.push([...curr]);
        return;
    }

    curr.push(nums[idx]);
    generateSubsets(nums, idx+1, curr, output);

    curr.splice(curr.length-1);
    generateSubsets(nums, idx+1, curr, output);
}