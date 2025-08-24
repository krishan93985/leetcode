/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = [] // 3rd element track
    let second = -Infinity;

    for(let i=nums.length-1; i>=0; i--){
        if(nums[i] < second) return true;

        while(stack.length && stack[stack.length-1] < nums[i]){
            second = stack.pop();
        }

        stack.push(nums[i]);
    }

    return false;
};