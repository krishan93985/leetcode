/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = new Set(nums)

    let maxCount = 0;
    for(let num of map){
        if(!map.has(num-1)){
            let currNum = num, count = 0;
            while(map.has(currNum)){
                count++;
                currNum++;
            }
            maxCount = maxCount > count ? maxCount:count;
        }
    }

    return maxCount;
};