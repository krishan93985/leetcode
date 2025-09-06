/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let s = 0, e = nums.length-1;
   
   while(s <= e){
    let mid = Math.floor((s+e)/2);

    if(target === nums[mid]) return mid;
    else if (target > nums[mid]){
        s = mid+1;
    } else{
        e = mid-1;
    }
   }

   return s;
};