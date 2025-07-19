/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pivot = -1;
    let s = 0, e = nums.length-1;
    let mid;

    while(s < e){
        mid = Math.floor((s+e)/2);
        let lvalue = nums[mid], rvalue = nums[e];
        if(lvalue > rvalue) s=mid+1;
        else e=mid;
    }

    pivot = s;

    let pos = binSearch(nums, 0, pivot-1, target);
    if(pos !== -1) return pos;

    pos  = binSearch(nums, pivot, nums.length-1, target)

    return pos;
};

var binSearch = function(nums, s, e, target) {
    if(s>e) return -1;

    let mid = Math.floor((s+e)/2)
    let midVal = nums[mid];
    if(midVal === target) return mid;

    if(midVal > target)
        return binSearch(nums, s, mid-1, target)
    
    return binSearch(nums, mid+1, e, target)
}