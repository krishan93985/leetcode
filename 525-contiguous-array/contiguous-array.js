/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map();
    let maxLen = 0, i = 0, oneSum = 0, zSum = 0;
    map.set(0,-1);

    while(i < nums.length){
        if(nums[i] === 0){
            zSum++;
        } else if(nums[i] === 1){
            oneSum++;
        }

        const lookupSum = oneSum - zSum;
        if(map.has(lookupSum)){
            const currLen = i - map.get(lookupSum);
            maxLen = maxLen > currLen ? maxLen : currLen;
        } else {
            map.set(lookupSum, i);
        }

        i++;
    }

    return maxLen;
};