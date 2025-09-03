/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    let lMap = new Map(), rMap = new Map();
    let pre = [], suff = []

    for(let i=0; i<nums.length; i++){
        let lValue = lMap.get(nums[i]) || {count:0, sum:0};
        pre[i] = lValue;
        lMap.set(nums[i], { count:lValue.count+1, sum:lValue.sum + i})
    }

    for(let i=nums.length-1; i>=0; i--){
        let rValue = rMap.get(nums[i]) || { count:0, sum:0 };
        suff[i] = rValue;
        rMap.set(nums[i], { count: rValue.count+1, sum: rValue.sum+i})
    }

    let result = []
    for(let i=0; i< nums.length; i++){
        let suffSum = suff[i].sum - suff[i].count * i;
        let preSum = pre[i].count * i - pre[i].sum;

        result[i] = suffSum + preSum
    }

    return result;
};