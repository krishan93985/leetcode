/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let s=0, e=nums.length-1;
    let leftMost = -1, rightMost = -1;

    while(s <= e){
        let mid = Math.floor((s+e)/2);
        if(nums[mid] === target){
            leftMost = mid;
            e = mid-1;
        } else if(nums[mid] > target){
            e = mid-1;
        } else{
            s = mid+1;
        }
    }

    s=0, e=nums.length-1;
     while(s <= e){
        let mid = Math.floor((s+e)/2);
        if(nums[mid] === target){
            rightMost = mid;
            s = mid+1;
        } else if(nums[mid] > target){
            e = mid-1;
        } else{
            s = mid+1;
        }
    }

    return [leftMost, rightMost]
};