/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const output = [], permutation = new Set();

    getPermutations(nums, output, permutation);

    return output;
};

var getPermutations = function(nums, output, permutation){
    if(permutation.size === nums.length){
        output.push(Array.from(permutation));
        return;
    }

    for(let i=0; i<nums.length; i++){
        if(permutation.has(nums[i])) continue;

        permutation.add(nums[i]);
        getPermutations(nums, output, permutation);
        permutation.delete(nums[i]);
    }
}