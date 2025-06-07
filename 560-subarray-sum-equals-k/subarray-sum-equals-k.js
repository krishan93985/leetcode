/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const pfxSum = [0];
    nums.forEach((el,idx) => {
        pfxSum.push(pfxSum[idx] + nums[idx])
    })

    let sum = 0;
    const hMap = new Map();
    hMap.set(0,1);
    for(let i=0; i<nums.length; i++){
        const prefixCurr = pfxSum[i+1];
        const find = prefixCurr - k;
        const freqFind = hMap.get(find);

        sum = sum + (freqFind ?? 0);
        
        hMap.set(prefixCurr,(hMap.get(prefixCurr) || 0) + 1);
    }

    return sum;
};