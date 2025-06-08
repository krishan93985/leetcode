/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1) return nums;

    const mid = Math.floor(nums.length/2);
    const left = sortArray(nums.slice(0,mid));
    const right = sortArray(nums.slice(mid));

    return merge(left, right);
};

var merge = (left, right) => {
    let i=0, j=0;
    const result = [];

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++;
        } else{
            result.push(right[j])
            j++;
        }
    }

    while(i < left.length) result.push(left[i++]);

    while(j < right.length) result.push(right[j++])

    return result;
}