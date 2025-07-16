/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 0) return [[]];

    const permutations = permute(nums.slice(1, nums.length));
    const output = [];
    for(let perms of permutations){
        for(let i=0; i<=perms.length; i++){
            const permCopy = [...perms];
            permCopy.splice(i,0,nums[0])
            output.push(permCopy);            
        }
    }

    return output;
};