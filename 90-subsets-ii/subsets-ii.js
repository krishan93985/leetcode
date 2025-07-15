/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const output = [];
    const arr = [];
    nums.sort((a,b) => a-b);

    generateSubsets(nums, 0, arr, output)

    return output;
};

var generateSubsets = function(nums, idx, arr, output) {
    output.push([...arr])

    for(let i=idx; i<nums.length; i++){
        if(i !== idx && nums[i] === nums[i-1]) continue;

        arr.push(nums[i]);
        generateSubsets(nums, i+1, arr, output);
        arr.pop(nums[i]);
    }
}