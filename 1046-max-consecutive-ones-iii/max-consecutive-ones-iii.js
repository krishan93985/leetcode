/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0, right = 0, countZ = 0, maxNum = 0;

    while(right < nums.length){
        countZ+= nums[right] === 0 ? 1 : 0;

        while(left <= right && countZ > k){
            countZ-= nums[left] === 0 ? 1 : 0;
            left++;
        }

        if(countZ <= k)
            maxNum = maxNum > (right - left + 1) ? maxNum : (right - left + 1);

        right++;
    }

    return maxNum;
};