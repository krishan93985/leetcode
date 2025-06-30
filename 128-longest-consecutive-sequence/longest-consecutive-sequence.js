/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = new Map()

    for(let num of nums){
        map.set(num, true)
    }

    let maxCount = 0;
    for(num of nums){
        if(!map.has(num-1)){
            let currNum = num, count = 0;
            if(map.get(currNum) === -1) continue;
            while(map.has(currNum)){
                count++;
                currNum++;
            }
            map.set(num, -1);
            maxCount = maxCount > count ? maxCount:count;
        }
    }

    return maxCount;
};