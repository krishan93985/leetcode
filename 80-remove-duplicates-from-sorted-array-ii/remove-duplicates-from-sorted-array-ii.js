/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /*
        
    */

    let left = 1, count = 1;

    for(let i=1; i<nums.length; i++){
        if(nums[i] === nums[i-1]){
            count++;
        } else{
            count = 1;
        }

        if(count <= 2){
            nums[left] = nums[i];
            left++
        }
    }

    return left;
}