/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //converting this to set to avoid nested loop for same minimum values of a consecutive sequence again and again to avoid n^square solution
    const set = new Set(nums)

    let maxCount = 0;
    for(num of set){
        if(!set.has(num-1)){
            let currNum = num, count = 0;
            while(set.has(currNum)){
                count++;
                currNum++;
            }
            maxCount = maxCount > count ? maxCount:count;
        }
    }

    return maxCount;
};