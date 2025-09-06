/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const subsets = []
  
  nums.sort((a,b) => a-b)

  const generateSubsets = (index, arr = []) => {
    subsets.push([...arr])

    for(let i=index; i<nums.length; i++){
        if(i!==index && nums[i] === nums[i-1]) continue;

        arr.push(nums[i]);
        generateSubsets(i+1, arr);
        arr.pop();
    }
  }

  generateSubsets(0, [])

  return subsets;
};