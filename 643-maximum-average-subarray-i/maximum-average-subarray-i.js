/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0, right = k-1;
    let maxSum = -10000000000, sum = 0;

    for(let i=0; i<=right; i++){
        sum+= nums[i];
    }

    //inc left and right maintaining avg and comparing
    while(right < nums.length){
        maxSum = maxSum > sum ? maxSum : sum;

        sum-=nums[left];
        right++;
        left++;
        sum+=nums[right];
    }

    return maxSum/k;
};