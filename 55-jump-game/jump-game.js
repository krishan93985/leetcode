/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let jump = 0;
    for(let i=0; i <= jump && i < nums.length; i++){
        jump=Math.max(i+nums[i],jump);
    }

    return jump >= nums.length-1
};