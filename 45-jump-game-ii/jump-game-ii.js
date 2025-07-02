/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    //iterate in array and jump from start pos till jump range
    //collect pos which can give max jump and jump there

    let min = 0
    for(let i=0; i<nums.length-1;){
        let jump = nums[i]+i
        let maxJump = jump, jumpIdx = jump;
        for(let j=i+1; j <= jump && j<nums.length && jumpIdx < nums.length-1; j++){
            if(nums[j]+j > maxJump){
                maxJump = nums[j]+j;
                jumpIdx = j;
            }
        }
        
        min++;
        i = jumpIdx;
    }

    return min;
};