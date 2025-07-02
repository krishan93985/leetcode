/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = -100000, sum = -100000;

    for(let num of nums){
        currSum = Math.max(num, currSum + num)

        sum = Math.max(currSum, sum)
    }

    return sum;
};