/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
   let left = 0, right = 0;
   let zero = 0, maxCount = 0;

   while(right < nums.length){
    if(nums[right] === 0) zero++;

    while(zero > k){
        if(nums[left] === 0) zero--;
        left++;
    }

    maxCount = Math.max(maxCount, right-left+1);
    right++;
   }

   return maxCount;
};