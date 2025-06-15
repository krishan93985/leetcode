/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let pivot = -1;
    let start = 0, end = nums.length -1;
    let mid, pos = -1;
    while(start < end){
        mid = Math.floor((start+end)/2);
        let el = nums[mid];

        if(el > nums[end])
            start = mid+1;
        else if(el <= nums[end]){
            end = mid;
        }
    }

    pivot = start;
    // console.log({pivot})

    pos = binSearch(nums,0, pivot-1, Math.floor((pivot-1)/2), target);
    // console.log({pos})
    if(pos !== -1) return pos;

    pos = binSearch(nums,pivot, nums.length - 1, Math.floor((pivot+nums.length-1)/2), target);
    // console.log({pos})

    return pos;
};

var binSearch = function(nums, s, e, mid, target){
    if(s > e) return -1;

    if(nums[mid] === target) return mid;
    if(nums[mid] > target)
        return binSearch(nums, s, mid-1, Math.floor((s+e)/2), target);
    else
        return binSearch(nums, mid+1, e, Math.floor((s+e)/2), target);

    return -1;
}