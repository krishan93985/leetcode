/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zeros = 0, l = 0, r = 0, maxOnes = 0;

    while(r < nums.length){
        if(nums[r] === 0) zeros++;

        while(zeros > k){
            if(nums[l] === 0){
                zeros--;
            }
            l++;
        }

        maxOnes = Math.max(maxOnes, r-l+1);
        r++;
    }

    return maxOnes;
};