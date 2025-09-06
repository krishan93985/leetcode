/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
   const output = []

   const subsetRec = (index, subset) => {
    if(index === nums.length){
        output.push([...subset])
        return;
    }

    //pick element
    subset.push(nums[index]);
    subsetRec(index+1, subset);

    //do not pick element
    subset.pop()
    subsetRec(index+1, subset);
   }
   
   subsetRec(0, []);

   return output;
};