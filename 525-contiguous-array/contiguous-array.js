/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map();

    let z = 0, o = 0, max = 0;
    map.set(0, -1);

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0) z++;
        else if(nums[i] === 1) o++;

        let diff = o-z;
        if(map.has(diff)){
            let leftIdx = map.get(diff);
            max = Math.max(i-leftIdx, max)
        } else{
            map.set(diff, i);
        }
    }

    return max;
};